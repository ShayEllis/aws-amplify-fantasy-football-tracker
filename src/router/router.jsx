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
        path: '/main',
        element: <App />,
        children: [
          // {index: true, element: <Dashboard />} /** Use this instead of 'dashboard' path? */
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
          {
            path: 'leagues',
            element: <Leagues />,
          },
          {
            path: 'teamDetails',
            element: <TeamBuilder />,
          },
          // {
          //   path: 'leagueStats/:leagueName'
          //   element: <></>
          // },
          // {
          //   path: 'leagueStats/:leagueName/edit'  /** use something like this for league stats? */
          //   element: <></>
          // },
        ],
      },
    ],
  },
])

export default router
