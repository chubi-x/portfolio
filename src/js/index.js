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
} from './expanding-animations.js'

gsap.registerPlugin(ScrollTrigger, Flip)

function initSmoothScrolling () {
  const lenis = new Lenis({
    lerp: 0.1, // Lower values create a smoother scroll effect
    smoothWheel: true
  })
  lenis.on('scroll', () => {
    ScrollTrigger.update()
  })

  function scrollFn (time) {
    lenis.raf(time)
    requestAnimationFrame(scrollFn)
  }
  requestAnimationFrame(scrollFn)
}

initSmoothScrolling()

function expandAnims () {
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

function animateHobbies () {
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
function heroTextAnimation () {
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

function stickyTestimonials () {
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

function toggleVideo () {
  const video = document.querySelector('video')
  if (video.paused) {
    video.play()
  }
}

preloadImages([
  '.expanding-text-img-inner',
  '.grid__item-inner',
  '.tiles__line-img'
]).then(() => {
  expandAnims()
  initSmoothScrolling()
  heroTextAnimation()
  // animateHobbies()
  stickyTestimonials()

  // document.querySelector('.loading').classList.remove('loading')
})
