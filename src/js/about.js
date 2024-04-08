// Importing utility function for preloading images
import { preloadImages } from './utils.js'
import { Flip } from 'gsap/Flip'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import {
  ExpandImageEffect1,
  ExpandImageEffect2,
  ExpandImageEffect3,
  ExpandImageEffect4,
  ExpandImageEffect5
} from './effects'
// Registers the ScrollTrigger and Flip plugins with GSAP
gsap.registerPlugin(ScrollTrigger, Flip)

const initSmoothScrolling = () => {
  // Initialize Lenis for smooth scroll effects. Lerp value controls the smoothness.
  const lenis = new Lenis({ lerp: 0.17 })

  // Sync ScrollTrigger with Lenis' scroll updates.
  lenis.on('scroll', ScrollTrigger.update)

  // Ensure GSAP animations are in sync with Lenis' scroll frame updates.
  gsap.ticker.add(time => {
    lenis.raf(time * 1000) // Convert GSAP's time to milliseconds for Lenis.
  })

  // Turn off GSAP's default lag smoothing to avoid conflicts with Lenis.
  gsap.ticker.lagSmoothing(0)
}

// Activate the smooth scrolling feature.
initSmoothScrolling()

// Define the initialize function to set up the effects and animations on the webpage.
const init = () => {
  // Apply the first effect to all elements with a specific data attribute, creating a new instance of the effect
  // for each selected element. This is repeated for each effect type (1 through 5), targeting elements with
  // corresponding data attributes (`data-expand-1`, `data-expand-2`, etc.)
  // Array of effect classes
  const effects = [
    { selector: '[data-expand-1]', effect: ExpandImageEffect1 },
    { selector: '[data-expand-2]', effect: ExpandImageEffect2 },
    { selector: '[data-expand-3]', effect: ExpandImageEffect3 },
    { selector: '[data-expand-4]', effect: ExpandImageEffect4 },
    { selector: '[data-expand-5]', effect: ExpandImageEffect5 }
  ]

  // Iterate over each effect configuration and apply the effect to all matching elements
  effects.forEach(({ selector, effect }) => {
    document.querySelectorAll(selector).forEach(el => {
      new effect(el)
    })
  })
}

// Preloading images and initializing setup when complete
preloadImages('.type__expand-img-inner').then(() => {
  init()
})
