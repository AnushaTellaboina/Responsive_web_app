import {useState} from 'react'
import './index.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar">
        <button type="button" className="menu-toggle" onClick={toggleMenu}>
          {[1, 2, 3].map(barNumber => (
            <div key={barNumber} className={`bar ${menuOpen ? 'open' : ''}`} />
          ))}
        </button>

        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          {['Home', 'About', 'Schedules', 'Membership', 'Pricing'].map(item => (
            <li key={item} className="nav-item">
              {item}
            </li>
          ))}

          <li className="nav-item offer">Offers</li>
        </ul>

        <button type="button" className="courses-button">
          Courses
        </button>
      </div>
    </nav>
  )
}

export default Header
