// React
import { useState } from 'react'
// Redux
import { useDispatch } from 'react-redux'
import { fetchLeagues } from './AppSlice'
// Styles
import './App.scss'
// React Router
import { Outlet } from 'react-router-dom'
// Components
import NavigationBar from './components/navigationBar/navigationBar'
// Bootstrap
import Container from 'react-bootstrap/Container'
// Utils
import { amplifyData } from './utils/amplifyData'
import { replaceNullValues } from './utils/utils'
// AWS Authentication
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

function App() {
  const dispatch = useDispatch()

  useState(() => {
    amplifyData.fetchLeagues().then((response) => { // move this to after authentication - maybe dashboard
      if (response) {
        const convertedResponse = replaceNullValues(response) // create spinner while data is being loaded
        dispatch(fetchLeagues(convertedResponse))
      }
    })
  }, [])

  return (
    <Authenticator>
      {({ signOut }) => (
        <>
          <NavigationBar signOut={signOut} />
          <Container fluid>
            <Outlet />
          </Container>
        </>
      )}
    </Authenticator>
  )
}

export default App
