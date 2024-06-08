import { useState } from 'react'
import './navigationBar.scss'
import { Link, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import footballIcon from '../../assets/football-icon.svg'

const NavigationBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)

  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas)

  return (
    <Navbar bg='light' data-bs-theme='light' expand={false} fixed='top'>
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
        <Navbar.Toggle onClick={toggleOffcanvas} aria-controls='offcanvas-nav-menu' />
        <Navbar.Offcanvas
          id='offcanvas-nav-menu'
          aria-labelledby='offcanvas-nav-menu'
          placement='end'
          show={showOffcanvas}>
            <Offcanvas.Header>
              <Offcanvas.Title id='offcanvas-nav-title'>
                Menu
              </Offcanvas.Title>
              <button className='btn-close' onClick={toggleOffcanvas}></button>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <NavLink to='dashboard' className='nav-link'>Dashboard</NavLink>
                <NavLink to='teamBuilder' className='nav-link'>Team Details</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
