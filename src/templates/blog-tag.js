import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TagList from "../components/TagList/index"

import { graphql, Link } from "gatsby"

const blogTagTemplate = ({ location, data, pageContext }) => {
  const { tag } = pageContext
  const siteTitle = data.site.siteMetadata.title
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <div>
      <Layout location={location} title={siteTitle}>
        <SEO title={siteTitle} />
        {/* <TagList tagList={tagList} /> */}
        <div>
          <h2>{tagHeader}</h2>
          <ul>
            {edges.map(({ node }) => {
              const { title, date } = node.frontmatter
              const { slug } = node.fields
              return (
                <li key={slug}>
                  <Link to={slug}>
                    {title} ({date})
                  </Link>
                </li>
              )
            })}
          </ul>
          <Link to="/tags">All Tags</Link>
        </div>
      </Layout>
    </div>
  )
}

export default blogTagTemplate

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
