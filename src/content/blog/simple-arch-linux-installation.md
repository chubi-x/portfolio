
---
layout: ../layouts/BlogPostLayout.astro
title: "Simple Arch Linux Installation or 'I (now) use Arch btw'"
author: Chubi
description: "How to setup Arch Linux on your machine."
image:
    url: "/images/blog/1_.jpg"
    alt: "picture of a stones in a pool of blue water"
pubDate: 2025-07-22
tags: ["arch", "linux", "tutorial"]
slug: "simple-arch-linux-installation"
---

# Simple Arch Linux Installation or "I (now) use Arch btw"
I have decided to have arch as my daily driver/
- what is the motivation?
	- being the sysadmin for my own machine.

## process

- create the bootable and boot sytem into arch
- connect to wifi. first run `iplink` to check network connection
- then `iwctl` to enter wifi connection mode
- choose network by running `station wlan0 connect <network name>`
- check system is available for remote access through ssh. `systemctl status sshd.service`. this checks sshdaemon is running
- check `.ssh` is empty. do this because we want to setup authentication
- to setup auth run `passwd` in `.ssh` directory
- should be able to ssh in through the password

## setting up the system

- check keyboard is correct using `localetcl list-keymaps` and choose your desired keyboard map.
- update system clock by running `timedatectl`

## partioning disks

- use `lsblk` to get a look into the currently attached disks and their partitions
<!-- - ## detour.  Need to dualboot. -->
<!---->
<!-- 	### procedure -->
<!-- 	- create ubuntu bootable -->
<!-- 	- boot to live usb -->
<!-- 	- install gparted -->
<!-- 	- resize partition -->
<!-- - there was a bit of a snag while partitionning. -->
<!-- 	- there was not enough space to have multiple partitions -->
<!-- 	- desktop environment wasnt opening as a result -->
<!-- 	- needed to freeup space so connected external hdd and mounted it by running `lsblk` to know device name and then mount it using `udisksctl mount -b /dev/sda1` and then copy files from SDD to HDD. -->

- will be using lvm for partitioning. lvm basically creates a /boot partition and then uses the rest as one big partition. it is in this big partition it creates "logical volumes" of storage which can then be freely resized. it also lets logical volumes span multiple storage devices.
- start partitioing using `fdisk /dev/nvmen01`
- we're going to be using lvm so i've cleared the disk. it should be fresh and have no partitions. 
- create a new partition table with `g` command and follow that with `n` to create new partition.
- creating boot partiton with `+1G` to have one GB for /boot. accept the defaults except size default.
- use `t` to change partition type though since we want it to be boot partition. look for `EFI` partition type and use that
- create the linux lvm partition. 
- accept default first section and last section since its the rest of the disk
- change type to use `Linux LVM` 
### encrypt disk
* will be using 'LVM on LUKS' format so we can encrypt the entire disk. [link to arch wiki]
* run `cryptsetup luksFormat /dev/<name of large partition>`. save passphrase soemwhere safe
* run `cryptsetup open /dev/<name> cryptlvm` to open the encrypted partition
* create a physical volume on the parittion using `pvcreate /dev/mapper/cryptlvm` 
* create volume group using `vgcreate <name> /dev/mapper/cryptlvm`
* create logical volumes which will be the actual volumes.
* create swap logical volume `lvcreate <volume group name> -L <swap_size> -n swap`
* create root and home and data partitions
- create filesystem for each partition you made using `mkfs .ext4 /dev/<volume group name>/<partition name>` 
- call `mkswap /dev/<volume group name>/swap`
- make fat32 filesystem for boot partition:
	- `mkfs.fat -F32 /dev/<boot partition>`
- make sure to mount root before boot!
- mount boot using `mount --mkdir /dev/<boot partition> /mnt/boot`
- use `lvremove /dev/<volume group>/<partition>` if you want to remove logical volume
- use `lvresize /dev/<group>/<partition> -L <size>` to resize after remvoing a block
- run `resize2fs <partition>` to resize after messing with any of the volumes 
- specify swap partition by running `swapon <partition>`

## installing the OS

- at this point we need to download the linux kernel and any other packages that would be needed. to do this run `pacstrap -K /mnt base linux linux-firmware intel-ucode`
	now if you cd into `/mnt` you'll see a regular linux filesystem.
- Now run `genfstab -U /mnt >> /mnt/etc/fstab` to genrate an fstab file
- next `chroot` into the system. `arch-chroot /mnt`. You are now in a linux OS. 

### Basic Setup
- change the timezone by running `ln -sf /usr/share/zoneinfo/Europe/London /etc/localtime` you can substitute the regions here are required.
- run `hwclock --systohc`to generate `/etc/adjtime` 
- now if you run `date` you will see you date and timezone info.
- Next install some essential packages using `pacman -Syu man which sudo grep man-pages texinfo man-db`

- open `/etc/locale.gen` and uncomment your desired locale. i'll be using `LANG=en_US.UTF-8` so i'll uncomment that line.
- next generate locales using `locale-gen`
- open `/etc/locale.conf` file and put in your desired locale there.  in my case i'll be using en_us which will mean I have this line in my file `LANG=en_US.UTF-8`
### Networking
We want to enable networking capabilities using ether or wlan. for those we will be using `systemd-networkd` and `iwd` for wired and wireless respectively.
- run `systemctl enable systemd-networkd.service systemd-resolved.service`
- `resolved` is needed for DNS configuration
		- you want to make sure you have a valid conf for `resolved` at `/etc/resolv.conf` so that you don't have DNS resolution problems. To do this simply run `sudo ln -sf /run/systemd/resolve/resolv.conf /etc/resolv.conf` to create a symlink from the `systemd` stub file. 
- create a network configuration file by running `vim /etc/systemd/network/25-wireless.network` and paste the following inside the file:
```bash

[Match]
Name=wlan0

[Network]
DHCP=yes
IgnoreCarrierLoss=3s
```
* install `iwd` by running `pacman -Syu iwd`
* enable `systemd` service: `systemctl enable iwd.service`
- setup hostname by putting desired hostname in `/etc/hostname`


### Customise initramfs 
`initramfs` is a scheme that loads a temporary root file system into RAM that aids in the linux startup process.
- Open `/etc/mkinitcpio.conf`.  There should be a default `HOOKS` array that we want to edit. Since we're using a `systemd` based `initramfs` we want to replace `udev` with `systemd` and also add `lvm2` since we're using LVM partitions. We also want to replace `encrypt` with `sd-encrypt` 
- open `/etc/vconsole.conf` and add a font from `/usr/share/kbd/consolefonts`: 
```
FONT=latarcyrheb-sun32
```
	we do this because we specified `vconsole` in hooks.
- edit `root` kernel parameter in bootloader to point to `root` logical volume.


- run `mkinitcpio -P` to regenerate `initramfs`. Make sure `lvm2` package is installed to avoid errors.
- you'll see a few warnings after running this. don't worry about these for now.

### Configure boot loader
when you startup a computer the follwoing process happens:
```
POST (POWER ON SELF TEST) ---> LOAD BIOS --> SCAN DISK FOR BOOT PARTITION --> LOOK FOR BOOTLOADER in /boot -->
```
- will be using `systemd-boot` as boot loader that comes preinstalled .
- run `bootctl install`. 
- you might get some warnings about `/boot` being world accessible. This is because of insufficient permissions on the filesystem. when we run `genfstab` it automatically generated some permissions regarding files and directories in the `fmask` and `dmask` options. These look different because FAT filesystems don't recognise UNIX permissions.
	- to fix our problem we simply want to change the values for `fmask` and `dmask` to `0137` and `0027` respectively. 
	- then unmount and remount our bootloader using `umount /boot` and `mount /boot`
	- now rerun `bootctl install`
	- run `bootctl update` to verify bootloader is installed.
- update boot loader entry for arch OS by adding this snippet:
```bash
title Arch Linux
linux /vmlinuz-linux
initrd /initramfs-linux.img

options rd.luks.name=<device_UUID>=cryptlvm root = <rootpartition> rw

# where <device_UUID> is the UUID of the entire encrypted LVM partition (get this by running blkid. basically the second partition apart from /boot)
# <rootpartition> is the mounted root partition logical volume, e.g: /dev/voluemgroup/mount
```
to `/boot/loader/entries/arch.conf`
[^1]

[^1]: when in vim normal mode you can type `!!` to insert linux commands into the current buffer.

### Setup User and authentication
- run `useradd -m <name>`
- give them root permission by running `usermod -aG wheel <name>`
- run `visudo` and uncomment this line in there: `%wheel ALL=(ALL:ALL) ALL`
	- if `visudo` doesn't work you might need to install `sudo` with pacman. 
- setup root password by running `passwd` as root and setup password for chubi by running `passwd chubi`


#### Bonus: Configuring SSH

Now that you have a barebones Arch install up and running you might want to be able to make changes to your system from another machine. In my case I had Arch running on my desktop and wanted to lie down on my bed and configure things with my laptop :)

##### setup
- Install `openssh` with `sudo pacman -Syu openssh`
- Start the ssh daemon: `sudo systemctl start sshd`
	- You can enable it if you want it running on boot: `sudo systemctl enable sshd`
- get the system's ip address with `ip a`
- Now on the client machine simply `ssh <user>@<ip address>`
