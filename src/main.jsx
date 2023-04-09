import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Main from './components/Layout/Main'
import Home from './components/Home/Home'
import OrderReview from './components/OrderReview/OrderReview'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('tshirts.json')
      },
      {
        path: 'review',
        element: <OrderReview />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
