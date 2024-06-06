import { useState } from 'react'
import './deleteInfoCardModal.scss'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DeleteInfoCardModal = () => {
  const [show, setShow] = useState(false)

  const showModal = () => setShow(true)
  const closeModal = () => setShow(false)

  return (
    <>
      <Button size='sm' variant='outline-secondary' className='p-0 ps-1 pe-1' onClick={showModal}>
        <i className='bi bi-trash3'></i>
      </Button>

      <Modal show={show} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className='fs-5'>Delete {'"League Name"'}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className='justify-content-center'>
            <Col xs='auto'>
              <Button variant='outline-danger' onClick={closeModal}>
                Delete
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default DeleteInfoCardModal
