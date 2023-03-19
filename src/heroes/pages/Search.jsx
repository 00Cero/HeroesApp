
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../helpers/getHeroesByName'
import { HeroCard } from '../components/HeroCard'

export const Search = () => {
  // write the search Text as a query parameter
  const navigate = useNavigate()

  // write the location, the url
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const actualHeroes = getHeroesByName(q)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (searchText.trim().length <= 1) {
      return
    }
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search </h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              className='form-control'
              name='searchText'
              onChange={onInputChange}
              value={searchText}
              autoComplete='off'
            />
            <button
              className='btn btn-outline-primary mt-1'
            >Search
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Result</h4>
          <hr />

          {q === '' ? <div className='alert alert-primary'>Search a hero</div> : ''}

          {actualHeroes.length === 0
            ? <div className='alert alert-danger'>No results</div>
            : actualHeroes.map(hero => <HeroCard key={hero.id} hero={hero} />
            )}

          {/* <Hero /> */}
        </div>
      </div>
    </>
  )
}
