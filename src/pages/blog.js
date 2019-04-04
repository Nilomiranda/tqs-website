import React from 'react'

import BlogLayout from '../components/blog-layout'
import SEO from '../components/seo'

import './styles/blog-index.css'

// images
import logo from '../../public/icons/logo-white.png'
import arrow from '../../public/icons/read-arrow.svg'

const BlogPage = () => (
    <BlogLayout>
        <SEO title="Blog" keywords={[`blog`, `thequeensspeech`]}/>
        <header>
            <div className="logo-container">
                <img src={ logo } alt="Company white logo"/>
            </div>
            <ul>
                <li>Home</li>
                <li>Contact us</li>
                <li>About us</li>
                <li>Blog</li>
            </ul>
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

export default BlogPage