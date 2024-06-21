// Styles
import './dashboard.scss'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// React Router
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <Container>
      <Row className='justify-content-evenly'>
        <Col xs='auto'>
          <Link className='nav-link' to='/main/leagues'>Leagues</Link>
        </Col>
        <Col xs='auto'>
          <Link className='nav-link' to='/main/teamDetails'>Team Details</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
