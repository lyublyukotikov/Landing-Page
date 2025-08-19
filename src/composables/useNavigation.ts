import { ref } from 'vue'
import type { NavItem } from '@/interfaces/nav-item.interface'

export function useNavigation() {
  const navItems = ref<NavItem[]>([
    { text: 'About', href: '#about' },
    { text: 'Work', href: '#work' },
    { text: 'Services', href: '#services' },
    { text: 'Contact', href: '#contact' },
  ])

  return { navItems }
}
