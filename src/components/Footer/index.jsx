import { Link, useLocation } from 'react-router-dom'
import './styles.css'

const Footer = ({ favoriteMovies }) => {
  const { pathname } = useLocation()

  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              {pathname === '/' ? (
                <div className='btn-navigate'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='currentColor'
                    className='bi bi-house-fill'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z'
                    />
                    <path
                      fillRule='evenodd'
                      d='M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z'
                    />
                  </svg>
                  <span>INICIO</span>
                </div>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  fill='currentColor'
                  className='bi bi-house'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z'
                  />
                  <path
                    fillRule='evenodd'
                    d='M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z'
                  />
                </svg>
              )}
            </Link>
          </li>
          <li>
            <Link to='favorites'>
              {pathname === '/favorites' ? (
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='currentColor'
                    className='bi bi-heart-fill'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                    />
                  </svg>
                  <span>FAVORITOS</span>
                </div>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  fill='currentColor'
                  className='bi bi-heart'
                  viewBox='0 0 16 16'
                >
                  <path d='m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z' />
                </svg>
              )}
            </Link>
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
