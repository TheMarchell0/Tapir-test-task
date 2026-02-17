import { useMediaQuery } from '@vueuse/core'

export function useResponsive() {
  const isDesktop = useMediaQuery('(min-width: 1441px)')
  const isLaptop = useMediaQuery('(min-width: 1024px) and (max-width: 1440px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
  const isMobile = useMediaQuery('(max-width: 767px)')

  return { isDesktop, isLaptop, isTablet, isMobile }
}
