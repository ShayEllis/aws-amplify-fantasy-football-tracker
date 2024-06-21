// Styles
import './home.scss'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
// React Router
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleSignIn = () => {
    navigate('/app/dashboard')
  }
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs='auto'>
          <h1>Fantasy Football League Tracker</h1>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs='auto'>
          <Button variant='outline-secondary' size='lg' onClick={handleSignIn}>
            Sign in
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
