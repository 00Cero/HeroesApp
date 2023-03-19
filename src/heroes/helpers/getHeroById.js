import { heroes } from '../data/heroes'

export const getHeroById = (id) => {
  return heroes.find(heroObj => heroObj.id === id)
}
