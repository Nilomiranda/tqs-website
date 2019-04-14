import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

import BlogLayout from "../components/blog-layout"
import SEO from "../components/seo"

import "./styles/blog-index.css"

// images
import logo from "../../public/icons/logo-white.png"
import arrow from "../../public/icons/read-arrow.svg"

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date
            path
            excerpt
          }
        }
      }
    }
  }
`

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openMobileMenu: false,
      menuText: `Menu`,
    }
  }

  render() {
    const { data } = this.props
    const { edges } = data.allMarkdownRemark

    const openMobileMenu = () => {
      // checks current state to toggle to correct one
      if (this.state.openMobileMenu) {
        this.setState({
          openMobileMenu: false,
          menuText: `Menu`,
        })
        return
      }
      this.setState({
        openMobileMenu: true,
        menuText: `Close menu`,
      })
    }

    return (
      <BlogLayout>
        <SEO title="Blog" keywords={[`blog`, `thequeensspeech`]} />
        <header className="blog-header">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="Company white logo" />
            </Link>
          </div>
          <ul className="web-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Contact us</li>
            <li>About us</li>
          </ul>
          <div className="mob-nav">
            <div className="mob-nav-button">
              <FontAwesomeIcon
                onClick={openMobileMenu}
                className="mob-icon"
                icon={this.state.openMobileMenu ? faTimes : faBars}
                size="2x"
                color="#FFF"
              />
              <span>{this.state.menuText}</span>
            </div>
            <ul
              className={
                this.state.openMobileMenu ? `mob-visible` : `mob-invisible`
              }
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Contact us</li>
              <li>About us</li>
            </ul>
          </div>
        </header>
        <main className="main-container">
          {edges.map(edge => {
            const { frontmatter } = edge.node
            return (
              <section key={frontmatter.path}>
                <div className="post-content">
                  <h1>{frontmatter.title}</h1>
                  <h2>{frontmatter.author}</h2>
                  <p>{frontmatter.excerpt}</p>
                </div>
                <Link className="read-button" to={frontmatter.path}>
                  <img className="button-icon" src={arrow} alt="Read button" />
                </Link>
              </section>
            )
          })}
        </main>
      </BlogLayout>
    )
  }
}
