import './leagueInfoCard.scss'
import LeagueInfoModal from '../leagueInfoModal/leagueInfoModal'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const LeagueInfoCard = () => {
  return (
    <Card id='leagueInfoCard'>
      <Card.Header className='p-2'>
        <Row>
          <Col>
            <Card.Title className='fs-6 fw-bold'>My League Name</Card.Title>
          </Col>
          <Col xs='auto'>
            <LeagueInfoModal type='edit' />
          </Col>
        </Row>
        <Card.Text>Team Name</Card.Text>
      </Card.Header>

      <Card.Body className='p-1'>
        <Tabs defaultActiveKey='summary' id='card-tabs' justify>
          <Tab eventKey='summary' title='Summary'>
            <Card.Text className='text-center mt-1 mb-1'>
              {'{teamCount}'} - Team
            </Card.Text>
            <Table striped hover size='sm' className='mb-0'>
              <tbody>
                <tr>
                  <td>Draft Date:</td>
                  <td>7/1/2024</td>
                </tr>
                <tr>
                  <td>Platform:</td>
                  <td>Yahoo</td>
                </tr>

                <tr>
                  <td>Buy-In:</td>
                  <td>$15.00</td>
                </tr>
                <tr>
                  <td>Pick Position:</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Playoff Teams:</td>
                  <td>6</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey='details' title='Details'>
            <Table striped hover size='sm' className='mt-1 mb-0'>
              <tbody>
                <tr>
                  <td>Initial Rank:</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Current Rank:</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Payout 1</td>
                  <td>$126.00</td>
                </tr>
                <tr>
                  <td>Payout 2</td>
                  <td>$20.00</td>
                </tr>
                <tr>
                  <td>Payout 3</td>
                  <td>$5.00</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  )
}

export default LeagueInfoCard
