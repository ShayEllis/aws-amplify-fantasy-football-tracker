// Styles
import './leagueInfoCard.scss'
// Prop Validation
import PropTypes from 'prop-types'
// Components
import LeagueInfoModal from '../leagueInfoModal/leagueInfoModal'
// Bootstrap
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// Utils
import { formatDate } from '../../utils/utils'

const LeagueInfoCard = ({ leagueData }) => {
  const formatedDraftDate = formatDate(leagueData.draftDate)

  return (
    <Card id='leagueInfoCard' className='flex-shrink-0'>
      <Card.Header className='p-2'>
        <Row>
          <Col>
            <Card.Title className='fs-6 fw-bold'>
              {leagueData.leagueName}
            </Card.Title>
          </Col>
          <Col xs='auto'>
            <LeagueInfoModal type='edit' leagueName={leagueData.leagueName} />
          </Col>
        </Row>
        <Card.Text>{leagueData.teamName}</Card.Text>
      </Card.Header>

      <Card.Body className='p-1'>
        <Tabs defaultActiveKey='summary' id='card-tabs' justify>
          <Tab eventKey='summary' title='Summary'>
            <Card.Text className='text-center mt-1 mb-1'>
              {leagueData.teamCount} - Team
            </Card.Text>
            <Table striped hover size='sm' className='mb-0'>
              <tbody>
                <tr>
                  <td>Draft Date:</td>
                  <td>{formatedDraftDate}</td>
                </tr>
                <tr>
                  <td>Platform:</td>
                  <td>{leagueData.platform.toUpperCase()}</td>
                </tr>
                <tr>
                  <td>Buy-In:</td>
                  <td>${parseInt(leagueData.buyIn).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Pick Position:</td>
                  <td>{leagueData.pickPosition}</td>
                </tr>
                <tr>
                  <td>Playoff Teams:</td>
                  <td>{leagueData.playoffTeams}</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey='details' title='Details'>
            <Table
              striped
              hover
              size='sm'
              className='mb-0'
              id='league-details-table'>
              <tbody>
                <tr>
                  <td>Initial Rank:</td>
                  <td>{leagueData.initialRank}</td>
                </tr>
                <tr>
                  <td>Current Rank:</td>
                  <td>{leagueData.currentRank}</td>
                </tr>
                <tr>
                  <td>Payout 1</td>
                  <td>${parseInt(leagueData.payout1).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Payout 2</td>
                  <td>${parseInt(leagueData.payout2).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Payout 3</td>
                  <td>${parseInt(leagueData.payout3).toFixed(2)}</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  )
}

LeagueInfoCard.propTypes = {
  leagueData: PropTypes.object.isRequired,
}

export default LeagueInfoCard
