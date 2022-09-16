import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Favorites from './components/Favorites'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import Results from './components/Results'
import Detail from './views/MovieDetail'
import './App.css'

function App() {
  const [favoriteMovies, setFavoriteMovies] = useState([])

  useEffect(() => {
    const favmovies = localStorage.getItem('favmovies')

    if (favmovies) {
      setFavoriteMovies(JSON.parse(favmovies))
    }
  }, [])

  const handleFavoriteMovies = movieData => {
    const isFavorite = favoriteMovies.find(
      movie => movie.id === movieData.id
    )
    if (isFavorite) {
      const filteredMovies = favoriteMovies.filter(movie => {
        return movie.id !== movieData.id
      })

      localStorage.setItem(
        'favmovies',
        JSON.stringify(filteredMovies)
      )

      setFavoriteMovies(filteredMovies)
    } else {
      setFavoriteMovies(prevState => {
        localStorage.setItem(
          'favmovies',
          JSON.stringify([...prevState, movieData])
        )
        return [...prevState, movieData]
      })
    }
  }

  return (
    <div className='container'>
      <Header />

      {/* <div>
        <Routes>
          <Route
            path='/list'
            element={
              <List
                handleFavoriteMovies={handleFavoriteMovies}
                favoriteMovies={favoriteMovies}
              />
            }
          />
          <Route path='/detail/movieID=:id' element={<Detail />} />
          <Route
            path='/results'
            element={
              <Results
                handleFavoriteMovies={handleFavoriteMovies}
                favoriteMovies={favoriteMovies}
              />
            }
          />
          <Route
            path='/favorites'
            element={
              <Favorites
                favoriteMovies={favoriteMovies}
                handleFavoriteMovies={handleFavoriteMovies}
              />
            }
          />
        </Routes>
      </div>
*/}
      <Footer favoriteMovies={favoriteMovies} />
    </div>
  )
}

export default App
