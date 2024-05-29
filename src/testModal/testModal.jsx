import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const TestModal = () => {
  const [show, setShow] = useState(false)

  const openModal = () => setShow(true)
  const closeModal = () => setShow(false)

  return (
    <>
      <Button variant='primary' onClick={openModal}>
        Open Modal
      </Button>

      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Boday</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={closeModal}>
            Close
          </Button>
          <Button variant='primary' onClick={closeModal}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TestModal
