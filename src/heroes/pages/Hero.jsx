import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById'

export const Hero = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const hero = useMemo(() => getHeroById(id), [id])

  const onNavigateBack = () => {
    navigate(-1)
  }

  if (!hero) {
    return <Navigate to='/' replace />
  }

  return (
    <div className='row mt-5 '>
      <div className='col-4'>
        <img
          className='img-thumbnail animate__animated animate__fadeInLeft'
          src={`/assets/imgs/heroes/${id}.jpg`}
          alt={hero.superhero}
        />
      </div>
      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>Alter ego: {hero.alter_ego}</li>
          <li className='list-group-item'>Publisher: {hero.publisher}</li>
          <li className='list-group-item'>First appearance: {hero.first_appearance}</li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>
        <button
          className='btn btn-outline-primary'
          onClick={onNavigateBack}
        > back
        </button>
      </div>

    </div>
  )
}
