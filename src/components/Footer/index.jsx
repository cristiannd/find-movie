import { Link } from "react-router-dom"
import './styles.css'

const Footer = ({ favoriteMovies }) => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link to='list'>Inicio</Link>
          </li>
          <li>
            <Link to='favorites'>Favoritos</Link>
            {favoriteMovies?.length !== 0 && (
              <span>{favoriteMovies.length}</span>
            )}
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
