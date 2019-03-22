import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// other components
import Menu from "./menu"

// styles
import "./styles/style.css"

const Header = ({ siteTitle }) => (
  <header
    className="header-img"
  >
    <Menu />
  </header>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
