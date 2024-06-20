// React
import { useState } from 'react'
// Redux
import { useDispatch } from 'react-redux'
import { fetchLeagues } from './AppSlice'
// Styles
import './App.scss'
// React Router
import { Outlet, useNavigate } from 'react-router-dom'
// Components
import NavigationBar from './components/navigationBar/navigationBar'
// Bootstrap
import Container from 'react-bootstrap/Container'
// Utils
import { amplifyData } from './utils/amplifyData'
import { amplifyAuth } from './utils/amplifyAuth'
import { replaceNullValues } from './utils/utils'

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useState(() => {
    amplifyAuth.userIsValid().then((response) => {
      if (response) {
        amplifyData.fetchLeagues().then((response) => {
          if (response) {
            const convertedResponse = replaceNullValues(response) // create spinner while data is being loaded
            dispatch(fetchLeagues(convertedResponse))
          }
        })
      } else {
        navigate('/signin')
      }
    })
  }, [])

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
