import { Link } from "react-router-dom"

const Navbar = ({user, logoutUser}) => {

  const logo = require("../../images/pngwing.com.png")

    return (
        <nav>
        <ul className="menu">

          <li>
            <Link to="/"><img className="logo" src={logo} alt=""/></Link> 
          </li>
          <li>
            <Link to="/list">List of Beers</Link>
          </li>
          {user ? <li> <Link to="/profile">Profile</Link></li> : null }
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {user ? <button className="logout" onClick={logoutUser}>Logout</button> : <Link to="/login">Login</Link>}
          </li>  
          
          
        </ul>
      </nav>
    )
}

export default Navbar