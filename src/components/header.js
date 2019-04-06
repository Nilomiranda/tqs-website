import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// other components
import Menu from "./menu"

// styles
import "./styles/style.css"

const Header = ({ siteTitle }) => (
  <div className="hero-header header-img">
    <header className="nav-menu-container">
      <ul className="nav-menu">
        {/* <li>Home</li> */}
        <li>Contact us</li>
        <li><Link to="#about-us">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </header>
    <Menu />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
