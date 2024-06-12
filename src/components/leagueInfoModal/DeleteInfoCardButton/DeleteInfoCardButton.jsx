// Styles
import './deleteInfoCardButton.scss'
// Bootstrap
import Button from 'react-bootstrap/Button'

const DeleteInfoCardButton = () => {
  const handleLeagueDelete = () => {}

  return (
    <Button
      size='sm'
      variant='outline-danger'
      className='p-1 ps-2 pe-2'
      onClick={handleLeagueDelete}>
      <i className='bi bi-trash3 pe-2'></i>
      Delete League
    </Button>
  )
}

export default DeleteInfoCardButton
