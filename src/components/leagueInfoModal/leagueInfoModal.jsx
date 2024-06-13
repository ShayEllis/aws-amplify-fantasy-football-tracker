// React
import { useState } from 'react'
// Styles
import './leagueInfoModal.scss'
// Bootstrap
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Accordion from 'react-bootstrap/Accordion'
// State functions
import { useSelector, useDispatch } from 'react-redux'
import {
  loadLeagueData,
  changeInputValues,
  resetFormValues,
} from './leagueInfoModalSlice'
import { selectInputValues } from './leagueInfoModalSlice'
import { selectLeague } from '../../AppSlice'

const LeagueInfoModal = ({ type = 'add', leagueName = null }) => {
  const [showModal, setShowModal] = useState(false)
  const leagueToEdit = useSelector((state) => selectLeague(state, leagueName))

  const openModal = () => {
    console.log(`Open ${type} modal`)

    setShowModal(true)
    if (type === 'edit' && leagueToEdit) {
      dispatch(loadLeagueData(leagueToEdit))
    } else {
      dispatch(resetFormValues())
    }
  }
  const closeModal = () => {
    console.log(`Close ${type} modal`)

    setShowModal(false)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  }

  const handleLeagueDelete = () => {
    console.log(`delete: ${leagueName}`)
  }

  // Form input state
  const inputValues = useSelector(selectInputValues)
  const dispatch = useDispatch()

  const handleInputValueChange = (event) => {
    const { name, value } = event.target
    dispatch(changeInputValues({ name, value }))
  }

  return (
    <>
      {type === 'add' ? (
        <Button
          size='sm'
          variant='secondary'
          onClick={openModal}
          id='add-league-button'>
          <i className='bi bi-plus'></i>
        </Button>
      ) : (
        <Button
          size='sm'
          variant='outline-secondary'
          className='p-0 ps-1 pe-1'
          onClick={openModal}>
          <i className='bi bi-pencil-square'></i>
        </Button>
      )}

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {type === 'add' ? 'Add League' : 'Edit League'}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <InputGroup className='pb-1'>
              <FloatingLabel controlId='leagueName' label='League Name'>
                <Form.Control
                  type='text'
                  aria-label='League name'
                  name='leagueName'
                  placeholder='Enter a league name'
                  onChange={handleInputValueChange}
                  value={inputValues.leagueName}
                  required></Form.Control>
              </FloatingLabel>
            </InputGroup>

            <InputGroup className='pb-1'>
              <FloatingLabel controlId='teamName' label='Team Name'>
                <Form.Control
                  type='text'
                  aria-label='Team Name'
                  name='teamName'
                  placeholder='Enter a team name'
                  onChange={handleInputValueChange}
                  value={inputValues.teamName}
                  required></Form.Control>
              </FloatingLabel>
            </InputGroup>

            <Row className='gx-1 pb-1'>
              <Col>
                <InputGroup>
                  <FloatingLabel controlId='draftDate' label='Draft Date'>
                    <Form.Control
                      type='date'
                      aria-label='Date the draft was held'
                      name='draftDate'
                      placeholder='Enter the date the draft was held'
                      onChange={handleInputValueChange}
                      value={inputValues.draftDate}></Form.Control>
                  </FloatingLabel>
                </InputGroup>
              </Col>
              <Col>
                <InputGroup>
                  <FloatingLabel controlId='platform' label='Platform'>
                    <Form.Select
                      aria-label='Platform of fantasy league'
                      name='platform'
                      placeholder='Enter the platform the league create on'
                      onChange={handleInputValueChange}
                      defaultValue={inputValues.platform}
                      required>
                      <option disabled value=''>
                        Platforms...
                      </option>
                      <option value='espn'>ESPN</option>
                      <option value='free'>Free</option>
                      <option value='sleeper'>Sleeper</option>
                      <option value='yahoo'>Yahoo</option>
                    </Form.Select>
                  </FloatingLabel>
                </InputGroup>
              </Col>
            </Row>

            <Row className='gx-1 pb-1'>
              <Col>
                <InputGroup>
                  <FloatingLabel controlId='teamCount' label='Team Count'>
                    <Form.Control
                      type='number'
                      min='1'
                      step='1'
                      aria-label='Team Count'
                      name='teamCount'
                      placeholder='Enter the number of teams'
                      onChange={handleInputValueChange}
                      value={inputValues.teamCount}
                      required></Form.Control>
                  </FloatingLabel>
                </InputGroup>
              </Col>
              <Col>
                <InputGroup>
                  <FloatingLabel controlId='pickPosition' label='Pick Position'>
                    <Form.Control
                      type='number'
                      min='1'
                      step='1'
                      aria-label='Position in Draft'
                      name='pickPosition'
                      placeholder='Enter your position in the draft pick order'
                      onChange={handleInputValueChange}
                      value={inputValues.pickPosition}></Form.Control>
                  </FloatingLabel>
                </InputGroup>
              </Col>
            </Row>

            <Row className='gx-1 pb-1 justify-content-center'>
              <Col xs={6}>
                <InputGroup>
                  <InputGroup.Text>$</InputGroup.Text>
                  <FloatingLabel controlId='buyIn' label='Buy-In'>
                    <Form.Control
                      type='number'
                      min='0'
                      step='any'
                      aria-label='Buy-In cost'
                      name='buyIn'
                      placeholder='Enter the buy-in cost'
                      onChange={handleInputValueChange}
                      value={inputValues.buyIn}
                      required></Form.Control>
                  </FloatingLabel>
                </InputGroup>
              </Col>
            </Row>

            <Row className='gx-1 pb-1'>
              <Col>
                <InputGroup>
                  <FloatingLabel controlId='initialRank' label='Initial Rank'>
                    <Form.Control
                      type='number'
                      min='1'
                      step='1'
                      aria-label='Initial Rank'
                      name='initialRank'
                      placeholder='Enter the starting rank'
                      onChange={handleInputValueChange}
                      value={inputValues.initialRank}></Form.Control>
                  </FloatingLabel>
                </InputGroup>
              </Col>
              <Col>
                <InputGroup>
                  <FloatingLabel controlId='currentRank' label='Current Rank'>
                    <Form.Control
                      type='number'
                      min='1'
                      step='1'
                      aria-label='Current Rank'
                      name='currentRank'
                      placeholder='Enter the current rank'
                      onChange={handleInputValueChange}
                      value={inputValues.currentRank}></Form.Control>
                  </FloatingLabel>
                </InputGroup>
              </Col>
            </Row>

            <Row className='gx-1 pb-1'>
              <Col>
                <InputGroup>
                  <FloatingLabel controlId='playoffTeams' label='Playoff Teams'>
                    <Form.Control
                      type='number'
                      min='1'
                      step='1'
                      aria-label='Number of teams in playoffs'
                      name='playoffTeams'
                      placeholder='Enter the number of teams in playoffs'
                      onChange={handleInputValueChange}
                      value={inputValues.playoffTeams}></Form.Control>
                  </FloatingLabel>
                </InputGroup>
              </Col>

              <Col>
                <InputGroup>
                  <InputGroup.Text>$</InputGroup.Text>
                  <FloatingLabel controlId='payout1' label='Payout 1'>
                    <Form.Control
                      type='number'
                      min='0'
                      step='any'
                      aria-label='First place win payout'
                      name='payout1'
                      placeholder='First place win payout'
                      onChange={handleInputValueChange}
                      value={inputValues.payout1}></Form.Control>
                  </FloatingLabel>
                </InputGroup>
              </Col>
            </Row>

            <Row className='gx-1 pb-1'>
              <Col>
                <InputGroup>
                  <InputGroup.Text>$</InputGroup.Text>
                  <FloatingLabel controlId='payout2' label='Payout 2'>
                    <Form.Control
                      type='number'
                      min='0'
                      step='any'
                      aria-label='Second place win payout'
                      name='payout2'
                      placeholder='Second place win payout'
                      onChange={handleInputValueChange}
                      value={inputValues.payout2}></Form.Control>
                  </FloatingLabel>
                </InputGroup>
              </Col>
              <Col>
                <InputGroup>
                  <InputGroup.Text>$</InputGroup.Text>
                  <FloatingLabel controlId='payout3' label='Payout 3'>
                    <Form.Control
                      type='number'
                      min='0'
                      step='any'
                      aria-label='Third place win payout'
                      name='payout3'
                      placeholder='Third place win payout'
                      onChange={handleInputValueChange}
                      value={inputValues.payout3}></Form.Control>
                  </FloatingLabel>
                </InputGroup>
              </Col>
            </Row>
            {type === 'edit' && (
              <Accordion className='pb-1'>
                <Accordion.Item id='modal-accordian-item' eventKey='danger'>
                  <Accordion.Button id='modal-accordian-btn'>
                    Options
                  </Accordion.Button>
                  <Accordion.Body className='p-2'>
                    <Row className='justify-content-center'>
                      <Col xs='auto'>
                        <Button
                          size='sm'
                          variant='outline-danger'
                          className='p-1 ps-2 pe-2'
                          onClick={handleLeagueDelete}>
                          <i className='bi bi-trash3 pe-2'></i>
                          Delete League
                        </Button>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            )}

            <Row className='gx-0 pt-2'>
              <Button variant='secondary' type='submit'>
                Save
              </Button>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

LeagueInfoModal.propTypes = {
  type: PropTypes.string,
  leagueName: PropTypes.string,
}

export default LeagueInfoModal
