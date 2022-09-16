import List from '../views/Home'

const Favorites = ({ favoriteMovies, handleFavoriteMovies }) => {
  return (
    <div>
      <h2>Favoritos</h2>
      <List
        movies={favoriteMovies}
        handleFavoriteMovies={handleFavoriteMovies}
        favoriteMovies={favoriteMovies}
      />
    </div>
  )
}

export default Favorites
