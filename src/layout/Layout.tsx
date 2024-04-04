import { BrowserRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Router } from '../routes/routes'

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  )
}

export default Layout
