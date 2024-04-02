import { NavbarItem } from './components/NavbarItem'

import { ROUTES as R } from '../../constants/url.constan'

import './Navbar.css'
import './components/NavbarrItem.css'

export const Navbar = () => (
  <nav
    className="nav-col nav-content d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
    style={{ backgroundColor: '#232323' }}
  >
    <ul className="nav">
      <NavbarItem text={R.Home.text} url={R.Home.url} />
    </ul>
  </nav>
)

export default Navbar
