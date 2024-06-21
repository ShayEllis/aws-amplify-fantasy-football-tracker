// Styles
import './leagues.scss'
// Bootstrap
import LeagueInfoCard from './leagueInfoCard/leagueInfoCard'
import Container from 'react-bootstrap/Container'
import LeagueInfoModal from './leagueInfoModal/leagueInfoModal'
import LeagueInfoModalButton from './leagueInfoModal/leagueInfoModalButton/leagueInfoModalButton'
// Redux
import { useSelector } from 'react-redux'
import { selectAllLeagues } from '../../AppSlice'

const Leagues = () => {
  const leagues = useSelector(selectAllLeagues)

  return (
    <Container
      className='d-flex flex-wrap justify-content-evenly p-0 pt-3 pb-3 gx-3 gap-3'
      fluid>
      <LeagueInfoModal />
      <LeagueInfoModalButton />
      {leagues.map((leagueData) => (
        <LeagueInfoCard key={leagueData.leagueName} leagueData={leagueData} />
      ))}
    </Container>
  )
}

export default Leagues
