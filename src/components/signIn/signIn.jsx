// Styles
import './signIn.scss'
// AWS Authentication
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
// React Router
import { Navigate } from 'react-router-dom'

const SignIn = () => {
  return <Authenticator><Navigate to='/app/dashboard' /></Authenticator>
}

export default SignIn
