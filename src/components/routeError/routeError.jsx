// Styles
import './routeError.scss'
// React Router
import { useRouteError, useNavigate } from 'react-router-dom'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const RouteError = () => {
  const error = useRouteError()
  const navigate = useNavigate()

  const handleReturnToHome = () => {
    navigate('/')
  }

  return (
    <Container >
      <Row className='justify-content-center'>
        <Col xs='auto'>
          <h2 className='mb-3'>Oh No! - An error has occurred</h2>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs='auto'>
          <p>{`${error.status} - ${error.statusText}`}</p>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs='auto'>
          <p>{error.data}</p>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs='auto'>
          <Button variant='outline-secondary' className='mt-5' onClick={handleReturnToHome}>Return to Home</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default RouteError
