import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
export class ExpandImageEffect1 {
  constructor (el) {
    // Validates the input element to ensure it's an HTML element.
    if (!el || !(el instanceof HTMLElement)) {
      throw new Error('Invalid element provided.')
    }

    this.wrapElement = el
    this.image = this.wrapElement.querySelector('.type__expand-img')
    this.expandTexts = this.wrapElement.querySelectorAll('.anim')
    this.textBlock = this.wrapElement.nextElementSibling

    // Calls the method to set up the initial effect.
    this.initializeEffect(this.wrapElement)
  }

  // Sets up the initial effect on the provided element.
  initializeEffect (element) {
    // Scroll effect.
    this.scroll()
  }

  // Defines the scroll effect logic for the element.
  scroll () {
    // Temporarily add the final class to capture the final state
    this.wrapElement.classList.add('type--open')
    const flipstate = Flip.getState([this.image, this.expandTexts], {
      props: 'transform'
    })
    // Remove the final class to revert to the initial state
    this.wrapElement.classList.remove('type--open')

    // Create the Flip animation timeline
    Flip.to(flipstate, {
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: this.wrapElement,
        start: 'clamp(top bottom)',
        end: '+=95%',
        scrub: true
      }
    }).to(
      this.textBlock,
      {
        ease: 'sine.inOut',
        // yPercent: -120,
        skewX: -20,
        scrollTrigger: {
          trigger: this.textBlock,
          start: 'top bottom',
          end: 'top -70%',
          scrub: true
        }
      },
      0
    )
  }
}

export class ExpandImageEffect2 {
  constructor (el) {
    // Validates the input element to ensure it's an HTML element.
    if (!el || !(el instanceof HTMLElement)) {
      throw new Error('Invalid element provided.')
    }

    this.wrapElement = el
    this.image = this.wrapElement.querySelector('.type__expand-img')
    this.expandTexts = this.wrapElement.querySelectorAll('.anim')
    this.textBlock = this.wrapElement.parentElement.querySelector('.block')

    // Calls the method to set up the initial effect.
    this.initializeEffect(this.wrapElement)
  }

  // Sets up the initial effect on the provided element.
  initializeEffect (element) {
    // Scroll effect.
    this.scroll()
  }

  // Defines the scroll effect logic for the element.
  scroll () {
    // Temporarily add the final class to capture the final state
    this.wrapElement.classList.add('type--open')
    const flipstate = Flip.getState([this.image, this.expandTexts])
    // Remove the final class to revert to the initial state
    this.wrapElement.classList.remove('type--open')

    // Create the Flip animation timeline
    Flip.to(flipstate, {
      ease: 'sine',
      simple: true,
      scrollTrigger: {
        trigger: this.wrapElement,
        start: 'center bottom',
        end: 'center top',
        scrub: true
      }
    })
    // .fromTo(
    //   this.textBlock,
    //   {
    //     lineHeight: 1.2,
    //     willChange: 'line-height'
    //   },
    //   {
    //     ease: 'sine.inOut',
    //     yPercent: -40,
    //     skewX: -2,
    //     lineHeight: 2,
    //     opacity: 0.2,
    //     scrollTrigger: {
    //       trigger: this.textBlock,
    //       start: 'top bottom',
    //       end: 'bottom top',
    //       scrub: true
    //     }
    //   },
    //   0
    // )
  }
}

export class ExpandImageEffect3 {
  constructor (el) {
    // Validates the input element to ensure it's an HTML element.
    if (!el || !(el instanceof HTMLElement)) {
      throw new Error('Invalid element provided.')
    }

    this.wrapElement = el
    this.image = this.wrapElement.querySelector('.type__expand-img')
    this.textBlock = this.wrapElement.nextElementSibling

    // Calls the method to set up the initial effect.
    this.initializeEffect(this.wrapElement)
  }

  // Sets up the initial effect on the provided element.
  initializeEffect (element) {
    // Scroll effect.
    this.scroll()
  }

  // Defines the scroll effect logic for the element.
  scroll () {
    // Temporarily add the final class to capture the final state
    this.wrapElement.classList.add('type--open')
    const flipstate = Flip.getState(this.image)
    // Remove the final class to revert to the initial state
    this.wrapElement.classList.remove('type--open')

    // Create the Flip animation timeline
    Flip.to(flipstate, {
      ease: 'sine',
      simple: true,
      scrollTrigger: {
        trigger: this.wrapElement,
        start: 'center bottom',
        end: 'center top',
        scrub: true
      }
    }).fromTo(
      this.textBlock,
      {
        lineHeight: 1.2,
        willChange: 'line-height'
      },
      {
        ease: 'sine.inOut',
        yPercent: -40,
        skewX: -2,
        lineHeight: 2,
        opacity: 0.2,
        scrollTrigger: {
          trigger: this.textBlock,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      },
      0
    )
  }
}

export class ExpandImageEffect4 {
  constructor (el) {
    // Validates the input element to ensure it's an HTML element.
    if (!el || !(el instanceof HTMLElement)) {
      throw new Error('Invalid element provided.')
    }

    this.wrapElement = el
    this.stack = this.wrapElement.querySelector('.type__expand--stack')
    this.image = this.wrapElement.querySelectorAll('.type__expand-img')
    this.imageInner = this.wrapElement.querySelectorAll(
      '.type__expand-img-inner'
    )
    this.expandTexts = this.wrapElement.querySelectorAll('.anim')

    this.textBlock = this.wrapElement.nextElementSibling

    // Calls the method to set up the initial effect.
    this.initializeEffect(this.wrapElement)
  }

  // Sets up the initial effect on the provided element.
  initializeEffect (element) {
    // Scroll effect.
    this.scroll()
  }

  // Defines the scroll effect logic for the element.
  scroll () {
    // Temporarily add the final class to capture the final state
    this.wrapElement.classList.add('type--open')
    const flipstate = Flip.getState(
      [this.stack, this.image, this.expandTexts],
      {
        props: 'transform'
      }
    )
    // Remove the final class to revert to the initial state
    this.wrapElement.classList.remove('type--open')

    // Create the Flip animation timeline
    Flip.to(flipstate, {
      ease: 'sine.inOut',
      absoluteOnLeave: true,
      nested: true,
      scrollTrigger: {
        trigger: this.wrapElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
    gsap.to(
      this.textBlock,
      {
        ease: 'sine.inOut',
        yPercent: -50,
        skewX: -4,
        rotation: 2,
        opacity: 0.2,
        scrollTrigger: {
          trigger: this.textBlock,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      },
      0
    )
  }
}

export class ExpandImageEffect5 {
  constructor (el) {
    // Validates the input element to ensure it's an HTML element.
    if (!el || !(el instanceof HTMLElement)) {
      throw new Error('Invalid element provided.')
    }

    this.wrapElement = el
    this.image = this.wrapElement.querySelectorAll('.type__expand-img')
    this.textBlock = this.wrapElement.nextElementSibling

    // Calls the method to set up the initial effect.
    this.initializeEffect(this.wrapElement)
  }

  // Sets up the initial effect on the provided element.
  initializeEffect (element) {
    // Scroll effect.
    this.scroll()
  }

  // Defines the scroll effect logic for the element.
  scroll () {
    // Temporarily add the final class to capture the final state
    this.wrapElement.classList.add('type--open')
    const flipstate = Flip.getState([this.image])
    // Remove the final class to revert to the initial state
    this.wrapElement.classList.remove('type--open')

    // Create the Flip animation timeline
    Flip.to(flipstate, {
      ease: 'sine.inOut',
      simple: true,
      scrollTrigger: {
        trigger: this.wrapElement,
        start: 'top bottom',
        end: 'center top',
        scrub: true
      }
    }).to(
      this.textBlock,
      {
        ease: 'sine.inOut',
        yPercent: -60,
        opacity: 0.2,
        scrollTrigger: {
          trigger: this.textBlock,
          start: 'top bottom',
          end: 'clamp(bottom top)',
          scrub: true
        }
      },
      0
    )
  }
}
