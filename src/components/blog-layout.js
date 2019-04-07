/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"

const BlogLayout = (props) => {
  console.log(props)
  const { children } = props
  return (
    <StaticQuery
      query={graphql`
        query SiteTitle {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <div
            style={{
              margin: `0 auto`,
            }}
          >
            <main
              style={{
                height: `100%`
              }}
            >
              {children}
            </main>
          </div>
        </>
      )}
    />
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout
