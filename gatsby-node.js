const path = require('path')

exports.createPages = (({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/templates/single.js')

  return graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { path } = node.frontmatter
      createPage({
        path,
        component: blogPostTemplate,
        context: {
          pathSlug: path
        }
      })
    })
  })
})