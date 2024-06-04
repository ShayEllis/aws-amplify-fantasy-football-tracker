import './navigationBar.scss'
import { Link, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import footballIcon from '../../assets/football-icon.svg'

const NavigationBar = () => {
  return (
    <Navbar bg='light' data-bs-theme='light' expand={false} fixed='top' className=''>
      <Container fluid>
        <Link to='/'>
          <Navbar.Brand>
            <img
              src={footballIcon}
              alt='Football Icon'
              className='d-inline-block align-top navbar-img'
            />
            <h2 className='d-inline-block fs-5 ms-2 mb-0'>
              Fantasy Football Tracker
            </h2>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls='bg-body-tertiary' />
        <Navbar.Offcanvas
          id=''
          aria-labelledby=''
          placement='end'></Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
