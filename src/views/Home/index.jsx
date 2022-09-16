import axios from 'axios'
import MovieCard from 'components/MovieCard'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const Home = ({ movies, handleFavoriteMovies, favoriteMovies }) => {
  const [moviesList, setMoviesList] = useState([])
  const endPoint =
    'https://api.themoviedb.org/3/discover/movie?api_key=0db1c391dcdd8094dc1b8183f8235e18&language=es-Es&page=1'

  useEffect(() => {
    if (!movies) {
      axios
        .get(endPoint)
        .then(res => setMoviesList(res.data.results))
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error, intente más tarde',
          })
        })
    } else {
      setMoviesList(movies)
    }
  }, [movies])

  return (
    <div
      className='row'
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      {moviesList.map(movie => {
        const isFav = favoriteMovies.find(fav => fav.id === movie.id)

        return (
          <MovieCard movie={movie} />
          // <div key={id}>
          //   <div>
          //     <img
          //       src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          //       className='card-img-top'
          //       alt=''
          //     />
          //     <button
          //       type='button'
          //       onClick={() =>
          //         handleFavoriteMovies({
          //           id,
          //           title,
          //           poster_path,
          //           overview,
          //         })
          //       }
          //     >
          //       <svg
          //         xmlns='http://www.w3.org/2000/svg'
          //         width='32'
          //         height='32'
          //         fill={isFav ? 'red' : 'white'}
          //         className='bi bi-suit-heart-fill'
          //         viewBox='0 0 16 16'
          //       >
          //         <path d='M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z' />
          //       </svg>
          //     </button>
          //     <div className='card-body'>
          //       <h5
          //         className='card-title m-0'
          //         style={{
          //           textOverflow: 'ellipsis',
          //           overflow: 'hidden',
          //           width: '100%',
          //           height: '2rem',
          //           whiteSpace: 'nowrap',
          //         }}
          //       >
          //         {title}
          //       </h5>
          //       <p
          //         style={{
          //           display: '-webkit-box',
          //           WebkitLineClamp: 3,
          //           WebkitBoxOrient: 'vertical',
          //           overflow: 'hidden',
          //           textOverflow: 'ellipsis',
          //         }}
          //       >
          //         {overview}
          //       </p>
          //       <Link to={`/detail/movieID=${id}`}>
          //         Ver más detalles
          //       </Link>
          //     </div>
          //   </div>
          // </div>
        )
      })}
    </div>
  )
}

export default Home
