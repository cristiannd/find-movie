import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './styles.css'

const Searcher = () => {
  const navigate = useNavigate()

  const submitHandler = e => {
    e.preventDefault()
    const keyword = e.currentTarget.keyword.value.trim()

    if (keyword.length === 0) {
      return Swal.fire({
        icon: 'error',
        title: 'Campo vacío',
        text: 'Tienes que completar el campo para realizar la búsqueda.',
      })
    }

    if (keyword.length < 2) {
      return Swal.fire({
        icon: 'error',
        title: 'Nombre demasiado corto',
        text: 'Tienes que ingresar más de 1 letras.',
      })
    }

    e.currentTarget.keyword.value = ''
    navigate(`/results?keyword=${keyword}`)
  }

  return (
    <form onSubmit={submitHandler} className='searcher'>
      <input
        type='text'
        placeholder='Nombre de película'
        name='keyword'
      />
      <button type='submit'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          fill='currentColor'
          class='bi bi-search'
          viewBox='0 0 16 16'
        >
          <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
        </svg>
      </button>
    </form>
  )
}

export default Searcher
