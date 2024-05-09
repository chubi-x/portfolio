import { preloadImages } from './utils.js'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'

import {
  ExpandImageEffect1,
  ExpandImageEffect2,
  ExpandImageEffect3
} from './about-me-animations.js'

gsap.registerPlugin(ScrollTrigger, Flip)

const initSmoothScrolling = () => {
  const lenis = new Lenis({
    lerp: 0.1, // Lower values create a smoother scroll effect
    smoothWheel: true
  })
  lenis.on('scroll', () => {
    ScrollTrigger.update()
  })

  const scrollFn = time => {
    lenis.raf(time)
    requestAnimationFrame(scrollFn)
  }
  requestAnimationFrame(scrollFn)
}

initSmoothScrolling()

const expandAnims = () => {
  const effects = [
    { selector: '[data-expand-1]', effect: ExpandImageEffect1 },
    { selector: '[data-expand-2]', effect: ExpandImageEffect2 },
    { selector: '[data-expand-3]', effect: ExpandImageEffect3 }
  ]

  effects.forEach(({ selector, effect }) => {
    document.querySelectorAll(selector).forEach(el => {
      new effect(el)
    })
  })
}

const animateHobbies = () => {
  const hobbiesGrid = document.querySelector('.hobbies-grid')
  const gridWrap = hobbiesGrid.querySelector('.hobbies-grid-wrap')
  const gridItems = hobbiesGrid.querySelectorAll('.hobbies-grid__item')

  const timeline = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: gridWrap,
      start: 'top bottom+=10%',
      end: 'bottom top-=5%',
      scrub: true
    }
  })

  // Set some CSS related style values
  hobbiesGrid.style.setProperty('--grid-width', '50%')
  hobbiesGrid.style.setProperty('--perspective', '3000px')
  hobbiesGrid.style.setProperty('--grid-item-ratio', '0.8')
  hobbiesGrid.style.setProperty('--grid-columns', '3')
  hobbiesGrid.style.setProperty('--grid-gap', '1vw')

  timeline
    .set(gridWrap, {
      transformOrigin: '0% 50%',
      rotationY: 30,
      xPercent: -80
    })
    .set(gridItems, {
      transformOrigin: '50% 0%'
    })
    .to(
      gridItems,
      {
        duration: 0.5,
        ease: 'power2',
        z: 500,
        stagger: 0.04
      },
      0
    )
    .to(
      gridItems,
      {
        duration: 0.5,
        ease: 'power2.in',
        z: 0,
        stagger: 0.04
      },
      0.5
    )
    .fromTo(
      gridItems,
      {
        rotationX: -70
      },
      {
        duration: 1,
        rotationX: 70,
        stagger: 0.04
      },
      0
    )
}
const heroTextAnimation = () => {
  Splitting()
  const heroText = document.getElementById('hero-text')
  const chars = heroText.querySelectorAll('.char')
  gsap.fromTo(
    chars,
    {
      'will-change': 'transform',
      transformOrigin: '0% 50%',
      xPercent: 105
    },
    {
      duration: 1,
      delay: 0.3,
      ease: 'bounce',
      xPercent: 0,
      stagger: 0.043
    }
  )
}

const stickyTools = () => {
  const testimonials = document.querySelector('.testimonials')
  gsap
    .timeline({
      scrollTrigger: {
        trigger: testimonials,
        start: 'top top',
        end: '+=100%',
        scrub: true
      }
    })
    .to(
      testimonials,
      {
        ease: 'none',
        startAt: { filter: 'brightness(100%)' },
        filter: 'brightness(50%)',
        scale: 0.5,
        borderRadius: 40
      },
      0
    )
}

const toggleVideo = () => {
  const video = document.querySelector('video')
  if (video.paused) {
    video.play()
  }
}
toggleVideo()

const openNav = () => {
  // credit: https://tympanus.net/Development/Theodore/

  const overlayPath = document.querySelector('.overlay__path')
  const menuWrap = document.querySelector('.menu-wrap')
  const menuItems = menuWrap.querySelectorAll('.menu__item')
  const openMenuCtrl = document.querySelector('button.open-menu')
  const closeMenuCtrl = menuWrap.querySelector('.button-close')
  const main = document.querySelector('main')

  let isAnimating = false

  // opens the menu
  const openMenu = () => {
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
  const closeMenu = () => {
    if (isAnimating) return
    isAnimating = true
    gsap
      .timeline({
        onComplete: () => (isAnimating = false)
      })
      .set(overlayPath, {
        attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
      })
      .to(
        overlayPath,
        {
          duration: 0.8,
          ease: 'power4.in',
          attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' }
        },
        0
      )
      .to(overlayPath, {
        duration: 0.3,
        ease: 'power2',
        attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
        onComplete: () => {
          menuWrap.classList.remove('menu-wrap--open')
        }
      })
      // now reveal
      .set(overlayPath, {
        attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }
      })
      .to(overlayPath, {
        duration: 0.3,
        ease: 'power2.in',
        attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' }
      })
      .to(overlayPath, {
        duration: 0.8,
        ease: 'power4',
        attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
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

preloadImages([
  '.expanding-text-img-inner',
  '.grid__item-inner',
  '.tiles__line-img'
]).then(() => {
  openNav()
  expandAnims()
  initSmoothScrolling()
  heroTextAnimation()
  animateHobbies()
  stickyTools()

  document.querySelector('.loading').classList.remove('loading')
})
