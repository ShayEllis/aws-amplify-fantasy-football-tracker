import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const FloatingLabelModal = () => {
  const [show, setShow] = useState(false)

  const openModal = () => setShow(true)
  const closeModal = () => setShow(false)

  return (
    <>
      <Button variant='primary' onClick={openModal}>
        Open Modal
      </Button>

      <Modal show={show} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add/Edit League</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={closeModal}>
            <InputGroup className='pb-1'>
              <FloatingLabel controlId='leagueName' label='League Name'>
                <Form.Control
                  type='text'
                  aria-label='League name'
                  name='leagueName'
                  placeholder='Enter a league name'
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
                      placeholder='Enter the date the draft was held'></Form.Control>
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
                      defaultValue=''
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
                      name='Team Count'
                      placeholder='Enter the number of teams'
                      required></Form.Control>
                  </FloatingLabel>
                </InputGroup>
              </Col>
              <Col>
                <InputGroup>
                  <FloatingLabel controlId='draftOrder' label='Draft Order'>
                    <Form.Control
                      type='text'
                      aria-label='Draft Order'
                      name='draftOrder'
                      placeholder='Enter the draft order'></Form.Control>
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
                      placeholder='Enter the starting rank'></Form.Control>
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
                      placeholder='Enter the current rank'></Form.Control>
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
                      placeholder='Enter the number of teams in playoffs'></Form.Control>
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
                      placeholder='First place win payout'></Form.Control>
                  </FloatingLabel>
                </InputGroup>
              </Col>
            </Row>

            <Row className='gx-0 pb-3'>
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
                      placeholder='Second place win payout'></Form.Control>
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
                      placeholder='Third place win payout'></Form.Control>
                  </FloatingLabel>
                </InputGroup>
              </Col>
            </Row>

            <Row className='gx-0'>
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

export default FloatingLabelModal
