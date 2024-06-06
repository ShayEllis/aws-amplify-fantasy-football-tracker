import React from 'react'
import ReactDOM from 'react-dom/client'
// Use normalize to help render elements consistantly
import 'normalize.css'
import './index.scss'

// Configure Bootstrap 5 styles
import 'bootstrap/dist/css/bootstrap.min.css'

// Configure Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// Configure React-Redux
import { Provider } from 'react-redux'
import store from './reduxStore/store.js'

// Configure React-Router-Dom
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
