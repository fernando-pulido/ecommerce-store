import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { URL_CONST } from '../constants/url.constan'

const Home = lazy(() => import('../views/Home'))

export const Router = () => (
  <Suspense fallback={<p>loading</p>}>
    <Routes>
      <Route element={<Home />} path={URL_CONST.home.url} />
    </Routes>
  </Suspense>
)
