// Get DOM elements

const header = document.querySelector('#header') as HTMLDivElement

const navToggle = document.querySelector('#nav-toggle') as HTMLDivElement

const navLinks = document.querySelectorAll(
  '.nav__item'
) as NodeListOf<HTMLLIElement>

// Event handlers

const handleToggleAnimationEnd = (): void => navToggle.classList.remove('play')

const toggleWithAnimation = (): void => {
  navToggle.classList.add('play')
  header.classList.toggle('show-menu')
}

const hide = (): void => header.classList.remove('show-menu')

// Event listeners

function handleMenu(): void {
  navToggle.addEventListener('animationend', handleToggleAnimationEnd)
  navToggle.addEventListener('click', toggleWithAnimation)

  navLinks.forEach(link => {
    link.addEventListener('click', hide)
  })
}

// Exports

export default handleMenu
