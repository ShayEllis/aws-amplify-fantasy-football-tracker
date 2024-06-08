import './App.scss'
import { Outlet } from 'react-router-dom'
import NavigationBar from './components/navigationBar/navigationBar'
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
