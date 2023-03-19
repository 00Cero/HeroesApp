import { Link } from 'react-router-dom'

export const HeroCard = ({ hero }) => {
  const IMG_URL = `assets/imgs/heroes/${hero.id}.jpg`

  return (
    <div className='col text-dark animate__animated animate__fadeIn'>
      <div className='card mb-3' style={{ maxWidth: '540px' }}>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img src={IMG_URL} className='rounded-start card-img' alt='...' />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{hero.superhero}</h5>
              <p className='card-text'>{hero.alter_ego}</p>
              <p>{hero.characters.split(',')
                .filter(character => character !== hero.alter_ego)
                .toString()}
              </p>
              <p className='card-text'>
                <small className='text-muted'>{hero.first_appearance}</small>
              </p>
              <Link to={`/hero/${hero.id}`}>Mas...</Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
