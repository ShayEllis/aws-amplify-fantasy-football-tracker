// React Router
import { createBrowserRouter } from 'react-router-dom'
// Components
import Home from '../components/home/home'
import SignIn from '../components/signIn/signIn'
import App from '../App'
import Dashboard from '../components/dashboard/dashboard'
import Leagues from '../components/leagues/leagues'
import TeamBuilder from '../components/teamBuilder/teamBilder'
import RouteError from '../components/routeError/routeError'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <RouteError />,
  },
  {
    element: <SignIn />,
    children: [
      {
        path: '/app',
        element: <App />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
          {
            path: 'leagues',
            element: <Leagues />,
          },
          {
            path: 'teamBuilder',
            element: <TeamBuilder />,
          },
        ],
      },
    ],
  },
])

export default router
