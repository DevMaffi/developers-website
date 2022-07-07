// Handle window location

function handleLocation(hash: string): void {
  if (window.location.hash === hash) return

  if (history.pushState) return history.pushState(null, '', hash)

  window.location.hash = hash
}

// Detect visible section

function handleActiveLocation(section: HTMLElement, scrollY: number): void {
  const sectionHeight: number = section.offsetHeight
  const sectionTop: number = section.offsetTop - 96
  const sectionId: string = section.getAttribute('id')!

  if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
    handleLocation(`#${sectionId}`)
}

// Apply handler for each section

const sections = document.querySelectorAll(
  'section[id]'
) as NodeListOf<HTMLElement> | null

function detectActive() {
  const scrollY: number = window.pageYOffset
  sections?.forEach(section => handleActiveLocation(section, scrollY))
}

// Handling the animation playback state when the element is in view

const reveals = document.querySelectorAll(
  '.reveal'
) as NodeListOf<HTMLElement> | null

const windowHeight: number = window.innerHeight

function startPlayback(): void {
  reveals?.forEach(entry => {
    const elementTop: number = entry.getBoundingClientRect().top

    if (elementTop < windowHeight / 1.3) entry.classList.add('play')
  })
}

// Add event handlers on window

function handleScroll(): void {
  startPlayback()

  window.addEventListener('scroll', detectActive)
  window.addEventListener('scroll', startPlayback)
}

// Exports

export default handleScroll
