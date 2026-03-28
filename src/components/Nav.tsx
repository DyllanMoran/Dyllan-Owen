import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <header>
      <nav>
        <NavLink to="/" className="site-title">Chintamani</NavLink>
        <ul>
          <li><NavLink to="/dark-materials">Dark Materials</NavLink></li>
          <li className="nav-group">
            <span className="nav-group-label">Ward of Remembering</span>
            <ul className="nav-dropdown">
              <li><NavLink to="/colby">Colby</NavLink></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
