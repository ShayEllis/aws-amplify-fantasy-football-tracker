// React
import { useState, useEffect } from 'react'
// Styles
import './navigationBar.scss'
// React Router
import { Link, NavLink } from 'react-router-dom'
// Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
// Icons
import footballIcon from '../../assets/football-icon.svg'
// AWS Authentication
import { amplifyAuth } from '../../utils/amplifyAuth'
import { signOut } from 'aws-amplify/auth'
// React Router
import { useNavigate } from 'react-router-dom'

const NavigationBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas)

  useEffect(() => {
    amplifyAuth.fetchUsername().then((response) => setUser(response))
  }, [])

  const handleSignOut = () => {
    signOut()
    navigate('/')
  }

  return (
    <Navbar
      bg='light'
      data-bs-theme='light'
      expand={false}
      fixed='top'
      id='navbar'>
      <Container fluid>
        <Link to='/dashboard'>
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
        <Navbar.Toggle
          onClick={toggleOffcanvas}
          aria-controls='offcanvas-nav-menu'
        />
        <Navbar.Offcanvas
          id='offcanvas-nav-menu'
          aria-labelledby='offcanvas-nav-menu'
          placement='end'
          show={showOffcanvas}
          onHide={toggleOffcanvas}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvas-nav-title'>{user}</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav>
              <NavLink
                to='dashboard'
                className={({ isActive }) =>
                  isActive ? 'nav-link active-nav-link' : 'nav-link'
                }
                onClick={toggleOffcanvas}>
                Dashboard
              </NavLink>
              <NavLink
                to='teamBuilder'
                className={({ isActive }) =>
                  isActive ? 'nav-link active-nav-link' : 'nav-link'
                }
                onClick={toggleOffcanvas}>
                Team Details
              </NavLink>
            </Nav>
          </Offcanvas.Body>
          <Nav.Link className='p-2 ps-4' id='logout-button' onClick={handleSignOut}>
            Log Out
          </Nav.Link>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
