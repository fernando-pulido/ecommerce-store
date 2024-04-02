import { FC } from 'react'
// import { Link } from 'react-router-dom'
import './NavbarrItem.css'

type Props = {
  url: string
  text: string
  className?: string
}

export const NavbarItem: FC<Props> = ({ text, url, className }) => (
  <li className={`nav-col${className ?? ''}`}>
    <a className="nav-col nav-link px-2 link-secondary" href={url}>
      {text}
    </a>
  </li>
)
