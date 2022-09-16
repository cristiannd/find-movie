import { Link } from 'react-router-dom'
import './styles.css'

const MovieCard = ({ movie }) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/'
  const {
    id,
    title,
    overview,
    backdrop_path,
    poster_path,
    release_date,
  } = movie

  const formattedReleaseDate = release_date
    .split('-')
    .reverse()
    .join('•')

  return (
    <article className='movie-card'>
      <div className='img-backdrop-container'>
        <img src={imgBaseUrl.concat(backdrop_path)} alt='' />
      </div>
      <h3>{title}</h3>
      <div className='details-container'>
        <div className='img-poster-container'>
          <img src={imgBaseUrl.concat(poster_path)} alt='' />
        </div>
        <div className='info'>
          <span className='release'>{formattedReleaseDate}</span>
          <p className='description'>{overview}</p>
          <Link
            className='detail-navigate'
            to={`/detail/movieID=${id}`}
          >
            Detalles
          </Link>
        </div>
      </div>
    </article>
  )
}

export default MovieCard
