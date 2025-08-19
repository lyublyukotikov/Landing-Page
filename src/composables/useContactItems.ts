import IPhoneContact from '@/components/atoms/IPhoneContact.vue'
import IEmailContact from '@/components/atoms/IEmailContact.vue'
import IMapMark from '@/components/atoms/IMapMark.vue'

export function useContactItems() {
  const contactItems = [
    {
      icon: IPhoneContact,
      text: '+393534567325',
      href: 'tel:+393534567325'
    },
    {
      icon: IMapMark,
      text: "4074 Ebert Summit Suite 375\nLake Leonardchester",
      href: 'https://www.google.com/maps/search/?api=1&query=4074+Ebert+Summit+Suite+375+Lake+Leonardchester'
    },
    {
      icon: IEmailContact,
      text: 'yourmail@gmail.com',
      href: 'mailto:yourmail@gmail.com'
    },
  ]

  return { contactItems }
}
