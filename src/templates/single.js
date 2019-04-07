import React from 'react'
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import BlogLayout from '../components/blog-layout'
import SEO from '../components/seo'

// styles
import './styles/single.css'

// images
import logo from '../../public/icons/logo-white.png'

export const post = graphql`
    query($path: String!) {
        markdownRemark (frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                title
                date (formatString: "MMMM DD, YYYY")
                path
                author
            }
        }
    }
`

export default class Single extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            openMobileMenu: false,
            menuText: `Menu` 
        }
    }

    render () {
        const { data } = this.props
        const { markdownRemark } = data
        const { frontmatter, html } = markdownRemark
        
        const openMobileMenu = () => {
            // checks current state to toggle to correct one
            if (this.state.openMobileMenu) {
                this.setState({
                    openMobileMenu: false,
                    menuText: `Menu`
                })
                return
            }
            this.setState({
                openMobileMenu: true,
                menuText: `Close menu`
            })
        }

        return (
            <BlogLayout>
                <SEO title="Blog post" keywords={[`blog`, `post title`]}/>
                <header className="blog-header">
                    <div className="logo-container">
                        <Link to="/"><img src={ logo } alt="Company white logo"/></Link>
                    </div>
                    <ul className="web-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Back to blog</Link></li>
                    </ul>
                    <div className="mob-nav">
                        <div className="mob-nav-button">
                            <FontAwesomeIcon 
                                onClick={ openMobileMenu } 
                                className="mob-icon"
                                icon={ this.state.openMobileMenu ? faTimes : faBars }
                                size="2x"
                                color="#FFF"
                            />
                            <span>{ this.state.menuText }</span>
                        </div>
                        <ul className={ this.state.openMobileMenu ? `mob-visible` : `mob-invisible` }>
                            <li><Link to="/">Home</Link></li>
                            <li>Contact us</li>
                            <li>About us</li>
                        </ul>
                    </div>
                </header>
                <section className="content-container">
                    <article className="content">
                        <div className="content-header">
                            <h1>{ frontmatter.title }</h1>
                            <p clasName="post-date">{ frontmatter.date }</p>
                            <p className="post-author">{ frontmatter.author }</p>
                        </div>
                        <div
                            dangerouslySetInnerHTML={{ __html: html }}
                        >   
                        </div>
                    </article>
                </section>
            </BlogLayout>
        )
    }
}
