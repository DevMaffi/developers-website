// Modules

import ScrollReveal from 'scrollreveal'

// Init scroll reveal

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 100,
}) as scrollReveal.ScrollRevealObject

// Apply scroll reveal animations on DOM

function applyReveal(): void {
  // home section
  sr.reveal('.home__title')
  sr.reveal('.home__descr', { delay: 300 })
  sr.reveal('.home__button', { delay: 400 })

  // accent particles
  sr.reveal('#particle1')
  sr.reveal('#particle2')
}

// Exports

export default applyReveal
