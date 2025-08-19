import type { Card } from '@/interfaces/card.interface'
export function useCards() {
  const cards: Card[] = [
    {
     image: '/Landing-Page/assets/web-development-image.png',
      title: 'Market Analysis',
      description:
        'There are on many variations of passages majority available but the have suffered.',
      alt: 'Market Analysis',
      bgColor: '#FFF7ED',
    },
    {
      image: '/Landing-Page/assets/web-development-image.png',
      title: 'Web Development',
      description:
        'There are on many variations of passages majority available but the have suffered.',
      alt: 'Web Development',
      bgColor: '#F2F3FF',
    },
    {
      image: '/Landing-Page/assets/web-development-image.png',
      title: 'Web Development',
      description:
        'There are on many variations of passages majority available but the have suffered.',
      alt: 'Web Development',
      bgColor: '#FFF0F3',
    },
        {
      image: '/Landing-Page/assets/web-development-image.png',
      title: 'Web Development',
      description:
        'There are on many variations of passages majority available but the have suffered.',
      alt: 'Web Development',
      bgColor: '#FFF0F3',
    },
  ]

  return { cards }
}
