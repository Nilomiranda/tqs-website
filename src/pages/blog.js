import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import BlogLayout from '../components/blog-layout'
import SEO from '../components/seo'

import './styles/blog-index.css'

// images
import logo from '../../public/icons/logo-white.png'
import arrow from '../../public/icons/read-arrow.svg'

export default class BlogPage extends React.Component {
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
                <SEO title="Blog" keywords={[`blog`, `thequeensspeech`]}/>
                <header>
                    <div className="logo-container">
                        <img src={ logo } alt="Company white logo"/>
                    </div>
                    <ul className="web-nav">
                        <li>Home</li>
                        <li>Contact us</li>
                        <li>About us</li>
                        <li>Blog</li>
                    </ul>
                    <div className="mob-nav">
                        <div className="mob-nav-button">
                            <FontAwesomeIcon 
                                onClick={ openMobileMenu } 
                                className="mob-icon"
                                icon={ faBars }
                                size="2x"
                                color="#FFF"
                            />
                            <span>{ this.state.menuText }</span>
                        </div>
                        <ul className={ this.state.openMobileMenu ? `mob-visible` : `mob-invisible` }>
                            <li>Home</li>
                            <li>Contact us</li>
                            <li>About us</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </header>
                <main className="main-container">
                    <section>
                        <div className="post-content">
                            <h1>Post title</h1>
                            <h2>Danilo Miranda</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua</p>
                        </div>
                        <a className="read-button" herf="#"><img className="button-icon" src={ arrow } alt="Read button"/></a>
                    </section>
                    <section>
                        <div className="post-content">
                            <h1>Post title</h1>
                            <h2>Danilo Miranda</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua</p>
                        </div>
                        <a className="read-button" herf="#"><img className="button-icon" src={ arrow } alt="Read button"/></a>
                    </section>
                    <section>
                        <div className="post-content">
                            <h1>Post title</h1>
                            <h2>Danilo Miranda</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua</p>
                        </div>
                        <a className="read-button" herf="#"><img className="button-icon" src={ arrow } alt="Read button"/></a>
                    </section>
                </main>
            </BlogLayout>
        ) 
    }   
}

// const BlogPage = () => {
//     state = {
//         menuVisible: false
//     }

//     const openMobileMenu = () => {
//         this.setState({ menuVisible: true })
//     }

//     return (
//         <BlogLayout>
//             <SEO title="Blog" keywords={[`blog`, `thequeensspeech`]}/>
//             <header>
//                 <div className="logo-container">
//                     <img src={ logo } alt="Company white logo"/>
//                 </div>
//                 <ul className="web-nav">
//                     <li>Home</li>
//                     <li>Contact us</li>
//                     <li>About us</li>
//                     <li>Blog</li>
//                 </ul>
//                 <div className="mob-nav">
//                     <FontAwesomeIcon 
//                         onClick={ openMobileMenu } 
//                         className="mob-icon"
//                         icon={ faBars }
//                         size="2x"
//                         color="#FFF"
//                     />
//                     <ul>
//                         <li>Home</li>
//                         <li>Contact us</li>
//                         <li>About us</li>
//                         <li>Blog</li>
//                     </ul>
//                 </div>
//             </header>
//             <main className="main-container">
//                 <section>
//                     <div className="post-content">
//                         <h1>Post title</h1>
//                         <h2>Danilo Miranda</h2>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//                         sed do eiusmod tempor incididunt ut labore et dolore 
//                         magna aliqua</p>
//                     </div>
//                     <a className="read-button" herf="#"><img className="button-icon" src={ arrow } alt="Read button"/></a>
//                 </section>
//                 <section>
//                     <div className="post-content">
//                         <h1>Post title</h1>
//                         <h2>Danilo Miranda</h2>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//                         sed do eiusmod tempor incididunt ut labore et dolore 
//                         magna aliqua</p>
//                     </div>
//                     <a className="read-button" herf="#"><img className="button-icon" src={ arrow } alt="Read button"/></a>
//                 </section>
//                 <section>
//                     <div className="post-content">
//                         <h1>Post title</h1>
//                         <h2>Danilo Miranda</h2>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//                         sed do eiusmod tempor incididunt ut labore et dolore 
//                         magna aliqua</p>
//                     </div>
//                     <a className="read-button" herf="#"><img className="button-icon" src={ arrow } alt="Read button"/></a>
//                 </section>
//             </main>
//         </BlogLayout>
//     )
// }

// export default BlogPage