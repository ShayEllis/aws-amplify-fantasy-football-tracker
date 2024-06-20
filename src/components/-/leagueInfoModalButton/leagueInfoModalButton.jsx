// React
import PropTypes from 'prop-types'
// Styles
import './leagueInfoModalButton.scss'
// Bootstrap
import Button from 'react-bootstrap/Button'
// Redux
import { useDispatch } from 'react-redux'
import {
  changeModalType,
  openModal,
  setLeagueToEdit,
} from '../leagueInfoModal/leagueInfoModalSlice'

const LeagueInfoModalButton = ({ type = 'add', leagueToEdit = null }) => {
  const dispatch = useDispatch()

  const handleModalOpen = () => {
    if (type === 'edit') {
      dispatch(setLeagueToEdit(leagueToEdit))
    } else {
      dispatch(changeModalType(type))
    }
    dispatch(openModal())
  }

  return (
    <>
      {type === 'add' ? (
        <Button
          name='add'
          size='sm'
          variant='secondary'
          onClick={handleModalOpen}
          id='add-league-button'>
          <i className='bi bi-plus modal-icon'></i>
        </Button>
      ) : (
        <Button
          name='edit'
          size='sm'
          variant='outline-secondary'
          className='p-0 ps-1 pe-1'
          onClick={handleModalOpen}>
          <i className='bi bi-pencil-square modal-icon'></i>
        </Button>
      )}
    </>
  )
}

LeagueInfoModalButton.propTypes = {
  type: PropTypes.string,
  leagueToEdit: PropTypes.string,
}

export default LeagueInfoModalButton
