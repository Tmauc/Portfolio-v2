export const handleScrollTo = (lenis, dest) => {
  lenis.scrollTo(dest, {
    offset: -80,
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  })
}