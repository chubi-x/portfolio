import { Flip } from 'gsap/Flip'
export class ExpandImageEffect1 {
  constructor (el) {
    if (!el || !(el instanceof HTMLElement)) {
      throw new Error('Invalid element provided.')
    }

    this.wrapElement = el
    this.image = this.wrapElement.querySelector('.expanding-text-img')
    this.expandTexts = this.wrapElement.querySelectorAll('.anim')
    this.textBlock = this.wrapElement.nextElementSibling

    this.initializeEffect(this.wrapElement)
  }

  initializeEffect (element) {
    this.scroll()
  }

  scroll () {
    this.wrapElement.classList.add('text--open')
    const flipstate = Flip.getState([this.image, this.expandTexts], {
      props: 'transform'
    })
    this.wrapElement.classList.remove('text--open')

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
    if (!el || !(el instanceof HTMLElement)) {
      throw new Error('Invalid element provided.')
    }

    this.wrapElement = el
    this.image = this.wrapElement.querySelector('.expanding-text-img')
    this.expandTexts = this.wrapElement.querySelectorAll('.anim')
    this.textBlock = this.wrapElement.parentElement.querySelector('.block')

    this.initializeEffect(this.wrapElement)
  }

  initializeEffect (element) {
    this.scroll()
  }

  scroll () {
    this.wrapElement.classList.add('text--open')
    const flipstate = Flip.getState([this.image, this.expandTexts])
    this.wrapElement.classList.remove('text--open')

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
  }
}

export class ExpandImageEffect3 {
  constructor (el) {
    if (!el || !(el instanceof HTMLElement)) {
      throw new Error('Invalid element provided.')
    }

    this.wrapElement = el
    this.image = this.wrapElement.querySelector('.expanding-text-img')
    this.textBlock = this.wrapElement.nextElementSibling

    this.initializeEffect(this.wrapElement)
  }

  initializeEffect (element) {
    this.scroll()
  }

  scroll () {
    this.wrapElement.classList.add('text--open')
    const flipstate = Flip.getState(this.image)
    this.wrapElement.classList.remove('text--open')

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
