import type { Card } from '@/interfaces/card.interface'
export function useCards() {
  const cards: Card[] = [
    {
      image: '/Landing-Page/assets/contact-us-image.png',
      title: 'User Interface Design',
      description:
        'There are on many variations of passages majority available but the have suffered.',
      alt: 'User Interface Design',
      bgColor: '#FFF7ED',
    },
    {
      image:'/Landing-Page/assets/marker-analysis-image.png',
      title: 'Market Analysis',
      description:
        'There are on many variations of passages majority available but the have suffered.',
      alt: 'Market Analysis',
      bgColor: '#F2F3FF',
    },
    {
      image:'/Landing-Page/assets/marker-analysis-image.png',
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
