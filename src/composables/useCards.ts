export interface Card {
  image: string
  title: string
  description: string
  alt: string
  bgColor: string
}

export function useCards() {
  const cards: Card[] = [
    {
      image: '/assets/contact-us-image.png',
      title: 'User Interface Design',
      description:
        'There are on many variations of passages majority available but the have suffered.',
      alt: 'User Interface Design',
      bgColor: '#FFF7ED',
    },
    {
      image:'/assets/marker-analysis-image.png',
      title: 'Market Analysis',
      description:
        'There are on many variations of passages majority available but the have suffered.',
      alt: 'Market Analysis',
      bgColor: '#F2F3FF',
    },
    {
      image:'/assets/marker-analysis-image.png',
      title: 'Web Development',
      description:
        'There are on many variations of passages majority available but the have suffered.',
      alt: 'Web Development',
      bgColor: '#FFF0F3',
    },
    {
      image: '/assets/web-development-image.png',
      title: 'Web Development',
      description:
        'There are on many variations of passages majority available but the have suffered.',
      alt: 'Web Development',
      bgColor: '#FFF0F3',
    },
  ]

  return { cards }
}
