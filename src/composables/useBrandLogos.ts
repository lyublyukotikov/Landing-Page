import TwitterIcon from '@/components/atoms/icons/TwitterIcon.vue'
import FacebookIcon from '@/components/atoms/icons/FaceBookIcon.vue'
import BehanceIcon from '@/components/atoms/icons/BehanceIcon.vue'
import PinterestIcon from '@/components/atoms/icons/PinterestIcon.vue'

export function useBrandLogos() {
  const logosBrand = [
    {
      icon: TwitterIcon,
      url: 'https://twitter.com/',
    },
    {
      icon: FacebookIcon,
      url: 'https://facebook.com/',
    },
    {
      icon: BehanceIcon,
      url: 'https://behance.net/',
    },
    {
      icon: PinterestIcon,
      url: 'https://pinterest.com/',
    },
  ]

  return { logosBrand }
}
