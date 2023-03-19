import { HeroesList } from '../components/HeroesList'

export const MarvelPage = () => {
  return (
    <div>
      <h1>Marvel Heroes</h1>
      <hr />
      <HeroesList publisher='Marvel Comics' />
    </div>
  )
}
