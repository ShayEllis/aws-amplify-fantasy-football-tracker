// Styles
import './dashboard.scss'
// Bootstrap
import LeagueInfoCard from '../leagueInfoCard/leagueInfoCard'
import Container from 'react-bootstrap/Container'
import LeagueInfoModal from '../leagueInfoModal/leagueInfoModal'
// State functions
import { useSelector } from 'react-redux'
import { selectAllLeagues } from '../../AppSlice'

const Dashboard = () => {
  const leagues = useSelector(selectAllLeagues)

  return (
    <>
      <Container
        className='d-flex flex-wrap justify-content-around p-0 pt-3 pb-3 gx-3 gap-3'
        fluid>
        <LeagueInfoModal />
        {leagues.map((leagueData) => (
          <LeagueInfoCard key={leagueData.leagueName} leagueData={leagueData} />
        ))}
      </Container>
    </>
  )
}

export default Dashboard
