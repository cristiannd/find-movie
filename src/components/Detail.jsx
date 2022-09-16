import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

const Detail = () => {
  const [movie, setMovie] = useState(null)

  const params = useParams()
  const token = localStorage.getItem('token')

  const endPoint = `https://api.themoviedb.org/3/movie/${params.id}?api_key=0db1c391dcdd8094dc1b8183f8235e18&language=es-ES`

  useEffect(() => {
    axios
      .get(endPoint)
      .then(res => setMovie(res.data))
      .catch(err => console.error(err))
  }, [endPoint])

  if (!token) {
    return <Navigate to='/' />
  }

  if (!movie) {
    return <h3>Loading...</h3>
  }

  const { title, overview, genres, poster_path, vote_average } = movie

  return (
    <div>
      <div className='row'>
        <h2>{title}</h2>
        <div className='col-4'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            className='card-img-top'
            alt='...'
          />
        </div>
        <div className='col-8'>
          <h5>Fecha de estreno:</h5>
          <h5>Reseña:</h5>
          <p>{overview}</p>
          <h5>Rating: {vote_average}</h5>
          <h5>Generos:</h5>
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Detail
