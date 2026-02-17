import { useMediaQuery } from '@vueuse/core'

export function useResponsive() {
  const isDesktop = useMediaQuery('(min-width: 1441px)')
  const isLaptop = useMediaQuery('(max-width: 1440px)')
  const isTablet = useMediaQuery('(max-width: 1024px)')
  const isMobile = useMediaQuery('(max-width: 767px)')

  return { isDesktop, isLaptop, isTablet, isMobile }
}
