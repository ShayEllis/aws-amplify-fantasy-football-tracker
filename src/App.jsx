// Styles
import './App.scss'
// React Router
import { Outlet } from 'react-router-dom'
// Components
import NavigationBar from './components/navigationBar/navigationBar'
// Bootstrap
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>
      <NavigationBar />
      <Container fluid>
        <Outlet />
      </Container>
    </>
  )
}

export default App
