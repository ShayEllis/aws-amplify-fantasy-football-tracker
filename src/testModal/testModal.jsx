import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

const TestModal = () => {
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
            <InputGroup>
              <InputGroup.Text id='League Name'>League Name</InputGroup.Text>
              <Form.Control
                aria-label='League Name'
                aria-describedby='League Name'
                name='League Name'
                required></Form.Control>
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id='Team Name'>Team Name</InputGroup.Text>
              <Form.Control
                aria-label='Team Name'
                aria-describedby='Team Name'
                name='Team Name'></Form.Control>
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id='Draft Date'>Draft Date</InputGroup.Text>
              <Form.Control
                aria-label='Date the draft was held'
                aria-describedby='Draft Date'
                name='Draft Date'></Form.Control>
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id='Platform'>Platform</InputGroup.Text>
              <Form.Select
                aria-label='Platform of fantasy league'
                aria-describedby='Platform'
                name='Platform'
                required>
                <option selected disabled hidden value=''>
                  Select a platform
                </option>
                <option value='espn'>ESPN</option>
                <option value='yahoo'>Yahoo</option>
                <option value='sleeper'>Sleeper</option>
                <option value='free'>Free</option>
              </Form.Select>
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id='Team Count'>Team Count</InputGroup.Text>
              <Form.Control
                aria-label='Team Count'
                aria-describedby='Team Count'
                name='Team Count'></Form.Control>
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id='Draft Order'>Draft Order</InputGroup.Text>
              <Form.Control
                aria-label='Draft Order'
                aria-describedby='Draft Order'
                name='Draft Order'></Form.Control>
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id='Buy-In'>Buy-In</InputGroup.Text>
              <Form.Control
                aria-label='Buy-In cost'
                aria-describedby='Buy-In'
                name='Buy-In'></Form.Control>
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id='Initial Rank'>Initial Rank</InputGroup.Text>
              <Form.Control
                aria-label='Initial Rank'
                aria-describedby='Initial Rank'
                name='Initial Rank'></Form.Control>
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id='Current Rank'>Current Rank</InputGroup.Text>
              <Form.Control
                aria-label='Current Rank'
                aria-describedby='Current Rank'
                name='Current Rank'></Form.Control>
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id='Playoff Teams'>
                Playoff Teams
              </InputGroup.Text>
              <Form.Control
                aria-label='Number of teams in playoffs'
                aria-describedby='Playoff Teams'
                name='Playoff Teams'></Form.Control>
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id='Payout 1'>Payout 1</InputGroup.Text>
              <Form.Control
                aria-label='First place win payout'
                aria-describedby='Payout 1'
                name='Payout 1'></Form.Control>
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id='Payout 2'>Payout 2</InputGroup.Text>
              <Form.Control
                aria-label='Second place win payout'
                aria-describedby='Payout 2'
                name='Payout 2'></Form.Control>
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id='Payout 3'>Payout 3</InputGroup.Text>
              <Form.Control
                aria-label='Third place win payout'
                aria-describedby='Payout 3'
                name='Payout 3'></Form.Control>
            </InputGroup>
            <Row>
              <Button variant='primary' type='submit'>
                Save
              </Button>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default TestModal
