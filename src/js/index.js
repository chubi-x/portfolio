// Import the necessary function for preloading images
import { preloadImages } from './utils.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger)
let lenis
const initSmoothScrolling = () => {
  lenis = new Lenis({
    lerp: 0.1, // Lower values create a smoother scroll effect
    smoothWheel: true // Enables smooth scrolling for mouse wheel events
  })
  //   ScrollTrigger.scrollerProxy()
  lenis.on('scroll', () => {
    ScrollTrigger.update()
  })

  const scrollFn = time => {
    lenis.raf(time)
    requestAnimationFrame(scrollFn)
  }
  requestAnimationFrame(scrollFn)
}
const grids = document.querySelectorAll('.grid')

const animateHobbies = grid => {
  const gridWrap = grid.querySelector('.grid-wrap')
  const gridItems = grid.querySelectorAll('.grid__item')
  const gridItemsInner = [...gridItems].map(item =>
    item.querySelector('.grid__item-inner')
  )
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
  grid.style.setProperty('--grid-width', '50%')
  grid.style.setProperty('--perspective', '3000px')
  grid.style.setProperty('--grid-item-ratio', '0.8')
  grid.style.setProperty('--grid-columns', '3')
  grid.style.setProperty('--grid-gap', '1vw')

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

const scroll = () => {
  animateHobbies(grids[0])
}

preloadImages('.grid__item-inner').then(() => {
  initSmoothScrolling()
  scroll()
  //   document.body.classList.remove('loading')
})
