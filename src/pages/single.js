import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import BlogLayout from '../components/blog-layout'
import SEO from '../components/seo'

// styles
import './styles/single.css'

// images
import logo from '../../public/icons/logo-white.png'

export default class Single extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            openMobileMenu: false,
            menuText: `Menu` 
        }
    }

    render () {
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
                        <li>Contact us</li>
                        <li>About us</li>
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
                            <h1>Post title</h1>
                            <p clasName="post-date">21-03-2019</p>
                            <p className="post-author">Danilo Miranda</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus, eros vel rutrum tincidunt, ligula diam placerat orci, vel bibendum elit dolor sit amet arcu. Aenean eget tortor eu leo aliquet porta in ac risus. Proin purus libero, vulputate nec elit laoreet, scelerisque finibus metus. Donec in lectus iaculis, bibendum risus in, pellentesque metus. Phasellus quis arcu sodales, venenatis nibh sit amet, semper urna. Fusce quis molestie leo, eget posuere ligula. Proin eleifend sem ante, et lacinia odio tincidunt id. Quisque suscipit accumsan volutpat. Maecenas id tempus lacus, at rutrum lacus. Nam sem enim, consequat sit amet molestie eget, maximus vitae nibh. Ut pharetra, sem vitae condimentum viverra, nisi lacus semper enim, quis dictum augue massa vitae nulla. Sed porttitor ac nisl non tincidunt.

                            Curabitur dictum risus eu ante vulputate lobortis. Mauris commodo lectus eget lacus imperdiet, nec facilisis ante molestie. Morbi viverra vel tellus et tincidunt. Nulla vel sapien ut felis pretium suscipit. Mauris ornare eget mauris in blandit. Morbi ac felis sapien. Praesent ullamcorper justo sed interdum dapibus. Praesent lobortis augue in lobortis congue. Cras augue mauris, sollicitudin id nisl eu, egestas facilisis tellus. Suspendisse potenti. In posuere aliquam quam vitae auctor. Proin eget varius massa, eleifend auctor turpis. Aenean commodo accumsan elementum. Curabitur bibendum luctus sapien, eu mollis nulla elementum nec.

                            Sed imperdiet quam id cursus lacinia. Vivamus tristique ex in venenatis blandit. Mauris mollis, ligula nec egestas porta, neque mi luctus orci, non placerat nibh ligula sed elit. Etiam feugiat sit amet nulla ac rhoncus. Mauris dapibus neque sed libero egestas, laoreet tincidunt elit condimentum. Fusce egestas elementum enim vel porttitor. Fusce tristique ac leo sit amet egestas. Aenean faucibus mauris in metus vestibulum scelerisque vitae in libero. Quisque vel enim tortor. Aenean neque tellus, malesuada at finibus a, pellentesque at turpis. Nam in justo vitae tortor iaculis dapibus vitae molestie lorem.

                            Vivamus consectetur risus pellentesque mattis fermentum. Vestibulum ut magna non enim pretium euismod. Proin vestibulum, arcu dapibus maximus sagittis, massa leo facilisis odio, quis dictum eros magna ac nulla. Fusce tincidunt est ac nunc rhoncus finibus. Vivamus varius mattis quam quis interdum. Praesent at mollis tellus. Nulla auctor nisi eu odio porta elementum.

                            Quisque ut erat vel dolor feugiat feugiat. Vestibulum condimentum velit vitae lacus ultrices, eget interdum nisl posuere. Fusce eget tincidunt lorem, sed sollicitudin libero. Suspendisse massa urna, iaculis a suscipit eget, elementum eget mi. Phasellus euismod ex ante, sed egestas justo tincidunt sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in lorem viverra, euismod nunc bibendum, dapibus nisl.
                        </p>
                    </article>
                </section>
            </BlogLayout>
        )
    }
}
