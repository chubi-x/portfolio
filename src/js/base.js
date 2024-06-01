import gsap from 'gsap'

function openNav () {
  // credit: https://tympanus.net/Development/Theodore/

  const overlayPath = document.querySelector('.nav-menu-path')
  const menuWrap = document.querySelector('.menu-wrap')
  const menuItems = menuWrap.querySelectorAll('.menu__item')
  const openMenuCtrl = document.querySelector('button.open-menu')
  const closeMenuCtrl = menuWrap.querySelector('.button-close')
  const main = document.querySelector('main')

  let isAnimating = false

  // opens the menu
  function openMenu () {
    if (isAnimating) return
    isAnimating = true
    gsap
      .timeline({
        onComplete: () => (isAnimating = false)
      })
      .set(overlayPath, {
        attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
      })
      .to(
        overlayPath,
        {
          duration: 0.8,
          ease: 'power4.in',
          attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' }
        },
        0
      )
      .to(overlayPath, {
        duration: 0.3,
        ease: 'power2',
        attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
        onComplete: () => menuWrap.classList.add('menu-wrap--open')
      })
      .to(
        main,
        {
          duration: 0.8,
          ease: 'power3.in',
          y: -200,
          stagger: 0.05
        },
        0.2
      )

      // now reveal

      .set(overlayPath, {
        attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }
      })
      .to(overlayPath, {
        duration: 0.3,
        ease: 'power2.in',
        attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
      })
      .to(overlayPath, {
        duration: 0.8,
        ease: 'power4',
        attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
      })
      // menu items translate animation
      .to(
        menuItems,
        {
          duration: 1.1,
          ease: 'power4',
          startAt: { y: 150 },
          y: 0,
          opacity: 1,
          stagger: 0.05
        },
        '>-=1.1'
      )
  }

  // closes the menu
  function closeMenu () {
    if (isAnimating) return
    isAnimating = true
    gsap
      .timeline({
        onComplete: () => (isAnimating = false)
      })
      .set(overlayPath, {
        attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' } //start as a line
      })
      .to(
        overlayPath,
        {
          duration: 0.8,
          ease: 'power4.in',
          attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' } //curve on bottom
        },
        0
      )
      .to(overlayPath, {
        duration: 0.3,
        ease: 'power2',
        attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }, //cover entire screen
        onComplete: () => {
          menuWrap.classList.remove('menu-wrap--open')
        }
      })
      // now reveal
      .set(overlayPath, {
        attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' } //cover entire screen but bigger
      })
      .to(overlayPath, {
        duration: 0.3,
        ease: 'power2.in',
        attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' } // curve on top
      })
      .to(overlayPath, {
        duration: 0.8,
        ease: 'power4',
        attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' } //return to line
      })
      // title elements
      .to(
        main,
        {
          duration: 1.1,
          ease: 'power4',
          y: 0,
          stagger: -0.05
        },
        '>-=1.1'
      )
      // menu items translate animation
      .to(
        menuItems,
        {
          duration: 0.8,
          ease: 'power2.in',
          y: 100,
          opacity: 0,
          stagger: -0.05
        },
        0
      )
  }

  openMenuCtrl.addEventListener('click', openMenu)
  closeMenuCtrl.addEventListener('click', closeMenu)
}

function toggleDarkMode () {
  const toggler = document.querySelector('.dark-mode-switch')
  const darkModeCircle = document.querySelector('.dark-mode-circle')

  function getDarkMode () {
    return window.localStorage.getItem('dark-mode') === 'yes'
  }
  function setDarkMode (value) {
    window.localStorage.setItem('dark-mode', value)
  }
  if (getDarkMode()) {
    document.body.setAttribute('data-theme', 'dark')
    darkModeCircle.classList.add('dark-mode-circle--dark')
    darkModeCircle.classList.remove('dark-mode-circle--light')
  }
  function toggleClasses () {
    if (darkModeCircle.classList.contains('dark-mode-circle--dark')) {
      setDarkMode('no')
      darkModeCircle.classList.remove('dark-mode-circle--dark')
      darkModeCircle.classList.add('dark-mode-circle--light')
      // delay to synchronise with dark mode animation
      setTimeout(() => document.body.setAttribute('data-theme', 'light'), 600)
    } else {
      setDarkMode('yes')
      darkModeCircle.classList.add(
        'dark-mode-circle--dark',
        'dark-mode-circle--dark-animate'
      )
      darkModeCircle.classList.remove('dark-mode-circle--light')
      setTimeout(() => document.body.setAttribute('data-theme', 'dark'), 600)
    }
  }
  toggler.addEventListener('click', toggleClasses)
}

openNav()
toggleDarkMode()
