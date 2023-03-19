import { HeroesList } from '../components/HeroesList'

export const DcPage = () => {
  return (
    <div>
      <h1>DC Heroes</h1>
      <hr />
      <HeroesList publisher='DC Comics' />
    </div>
  )
}
