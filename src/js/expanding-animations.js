import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
class ExpandingAnimation {
  constructor (el) {
    if (!el || !(el instanceof HTMLElement)) {
      throw new Error('Invalid element provided.')
    }

    this.wrapElement = el
    this.image = this.wrapElement.querySelector('.expanding-text-img')
    this.expandTexts = this.wrapElement.querySelectorAll('.anim')
    this.textBlock = this.wrapElement.nextElementSibling

    this.initializeEffect()
  }
  initializeEffect () {
    throw new Error('Abstract class function must be overriden')
  }
}
export class ExpandImageEffect1 extends ExpandingAnimation {
  initializeEffect () {
    this.wrapElement.classList.add('text--open')
    const flipstate = Flip.getState(this.image)
    this.wrapElement.classList.remove('text--open')

    Flip.to(flipstate, {
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: this.wrapElement,
        start: 'clamp(top bottom)',
        end: '+=95%',
        scrub: true
      }
    })
      .to(this.expandTexts, {
        ease: 'sin.inOut',
        skewX: -20,
        scrollTrigger: {
          trigger: this.wrapElement,
          start: 'clamp(top bottom)',
          end: '+=95%',
          scrub: true
        }
      })
      .to(
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

export class ExpandImageEffect2 extends ExpandingAnimation {
  initializeEffect () {
    this.wrapElement.classList.add('text--open')
    const flipstate = Flip.getState(this.image)
    this.wrapElement.classList.remove('text--open')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.wrapElement,
        start: 'clamp(center bottom)',
        end: 'center top',
        scrub: true
      }
    })

    const flip = Flip.to(flipstate, {
      ease: 'sine',
      simple: true
    })
    tl.add(flip).to(this.expandTexts, {
      ease: 'sine',
      skewX: -20
    })
  }
}

export class ExpandImageEffect3 extends ExpandingAnimation {
  initializeEffect () {
    this.wrapElement.classList.add('text--open')
    const flipstate = Flip.getState([this.image])
    this.wrapElement.classList.remove('text--open')

    Flip.to(flipstate, {
      ease: 'sine',
      simple: true,
      x: 0,
      scrollTrigger: {
        trigger: this.wrapElement,
        start: 'clamp(center bottom)',
        end: 'clamp(center top)',
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
        yPercent: -20,
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
