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
        <Outlet />
        <LeagueInfoModal />
      </Container>
    </>
  )
}

export default App
