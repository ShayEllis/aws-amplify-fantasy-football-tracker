// React Router
import { createBrowserRouter } from 'react-router-dom'
// Components
import App from '../App'
import Dashboard from '../components/dashboard/dashboard'
import TeamBuilder from '../components/teamBuilder/teamBilder'

const router = createBrowserRouter([
  {
    path: '/',
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
])

export default router
