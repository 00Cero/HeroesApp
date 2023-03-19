import { heroes } from '../data/heroes'

export const getHeroesByPublisher = (publisher) => {
  const availablePublishers = ['DC Comics', 'Marvel Comics']

  if (!availablePublishers.includes(publisher)) throw new Error(`${publisher} is not a valid publisher `)

  return heroes.filter(hero => hero.publisher === publisher)
}
