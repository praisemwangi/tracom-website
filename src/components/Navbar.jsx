import {Link} from 'react-router-dom';
import './Navbar.css'
function Navbar () {
  return (
    <>
    <header className="main-header">
      <nav className="main-nav">
        <img src="./src/Assets/tracom_services_cover.jpg" alt="tracom-logo" className="main-logo" />
        <ul id="main-nav-ul">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/Team">Team</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="button">
          <Link to="/Register"style={{display:'block', padding:'2px', textDecoration:'none'}} >
            Register
          </Link>
          <Link to="/Login" style={{display:'block', padding:'2px' , textDecoration:'none'}} >
            Login
          </Link>
        </div>
      </nav>
    </header>
  </>
  )
}

export default Navbar