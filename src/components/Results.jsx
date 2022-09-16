import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import List from '../views/Home'

const Results = ({ handleFavoriteMovies, favoriteMovies }) => {
  const [moviesResults, setMoviesResults] = useState([])
  const [params] = useSearchParams()
  const keyword = params.get('keyword')

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=0db1c391dcdd8094dc1b8183f8235e18&language=es-ES&query=${keyword}&page=1`
      )
      .then(res => {
        const results = res.data.results
        if (results.length === 0) {
          Swal.fire({
            icon: 'warning',
            title: 'Sin resultados',
            text: `Tu busqueda con la palabra ${keyword} no encontró resultados, ¡prueba con otra!`,
          })

          setMoviesResults([])
        } else {
          setMoviesResults(res.data.results)
        }
      })
      .catch(err => console.error(err))
  }, [keyword])

  return (
    <div>
      <h2>
        Resultados de <em>{keyword}</em>
      </h2>
      <List
        movies={moviesResults}
        handleFavoriteMovies={handleFavoriteMovies}
        favoriteMovies={favoriteMovies}
      />
    </div>
  )
}

export default Results
