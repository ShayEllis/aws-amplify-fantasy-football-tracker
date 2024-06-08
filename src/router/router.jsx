import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Dashboard from '../components/dashboard/dashboard'

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
        element: '',
      },
    ],
  },
])

export default router
