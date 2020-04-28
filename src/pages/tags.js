import React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import _ from "lodash"

const Tags = ({ data, location }) => {
  const tags = data.allMarkdownRemark.group
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <div>
        <h2>Tags</h2>
        <ul>
          <>
            {tags.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </>
        </ul>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`
