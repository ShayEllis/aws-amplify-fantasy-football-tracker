// React Router
import { createBrowserRouter } from 'react-router-dom'
// Components
import Home from '../components/home/home'
import SignIn from '../components/signIn/signIn'
import App from '../App'
import Dashboard from '../components/dashboard/dashboard'
import TeamBuilder from '../components/teamBuilder/teamBilder'
import RouteError from '../components/routeError/routeError'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <RouteError />
  },
  {
    path: '/app',
    element: <App />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'teamBuilder',
        element: <TeamBuilder />,
      },
    ],
  },
  {
    path: '/signIn',
    element: <SignIn />,
  },
])

export default router
