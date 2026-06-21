import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Manresa Realty</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/properties">Properties</Link>

        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
