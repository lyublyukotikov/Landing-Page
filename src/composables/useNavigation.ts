import { ref } from 'vue'

export interface NavItem {
  text: string
  href: string
}

export function useNavigation() {
  const navItems = ref<NavItem[]>([
    { text: 'About', href: '#about' },
    { text: 'Work', href: '#work' },
    { text: 'Services', href: '#services' },
    { text: 'Contact', href: '#contact' },
  ])

  return { navItems }
}