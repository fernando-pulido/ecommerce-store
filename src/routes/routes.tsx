import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { ROUTES } from '../constants/url.constan'

const Home = lazy(() => import('../views/Home/Home'))

export function GenerateRoutes() {
  const routes = createBrowserRouter([
    { path: ROUTES.Home.url, element: <Home /> },
  ])

  return routes
}
