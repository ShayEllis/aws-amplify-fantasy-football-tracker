import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import LeagueInfoCard from '../components/leagueInfoCard/leagueInfoCard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'dashboard',
        element: <LeagueInfoCard />,
      },
      {
        path: 'teamBuilder',
        element: '',
      },
    ],
  },
])

export default router
