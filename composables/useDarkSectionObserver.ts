export const useDarkSectionObserver = () => {
  const isOnDark = useState<boolean>('is-on-dark', () => false)

  onMounted(async () => {
    await nextTick() 
    const darkSections = document.querySelectorAll<HTMLElement>('.dark-section')

    if (!darkSections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isOnDark.value = true
          } else {
            isOnDark.value = false
          }
        })
      },
      {
        root: null,
        rootMargin: '-72px 0px 0px 0px', // app-bar height
        threshold: 0.1
      }
    )

    darkSections.forEach(section => observer.observe(section))

    onBeforeUnmount(() => observer.disconnect())
  })

  return { isOnDark }
}
