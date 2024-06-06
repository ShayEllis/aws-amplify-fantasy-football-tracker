import './App.scss'
import { Outlet } from 'react-router-dom'
import NavigationBar from './components/navigationBar/navigationBar'
import Container from 'react-bootstrap/Container'

import LeagueInfoModal from './components/leagueInfoModal/leagueInfoModal'

function App() {
  return (
    <>
      <NavigationBar />
      <Container fluid>
        <LeagueInfoModal />
        <Outlet />
      </Container>
    </>
  )
}

export default App
