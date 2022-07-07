// Get DOM elements

const accordionItems = document.querySelectorAll(
  '.services__accordion-item'
) as NodeListOf<HTMLDivElement> | null

// Toggle accordion content display

function toggleItem(item: HTMLDivElement): void {
  const accordionContent = item.querySelector(
    '.services__accordion-content'
  ) as HTMLDivElement | null

  if (!accordionContent) return

  if (item.classList.contains('accordion-open')) {
    accordionContent?.removeAttribute('style')
    item.classList.remove('accordion-open')

    return
  }

  accordionContent.style.height = `${accordionContent.scrollHeight}px`
  item.classList.add('accordion-open')
}

// Add event handlers on accordion items header

function handleAccordion(): void {
  accordionItems?.forEach(item => {
    const accordionHeader = item.querySelector(
      '.services__accordion-header'
    ) as HTMLHeadingElement | null

    if (!accordionHeader) return

    accordionHeader.addEventListener('click', () => {
      const openItem = document.querySelector(
        '.accordion-open'
      ) as HTMLDivElement | null

      if (openItem && openItem !== item) toggleItem(openItem)

      toggleItem(item)
    })
  })
}

// Export

export default handleAccordion
