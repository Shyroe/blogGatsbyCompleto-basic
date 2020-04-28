import React from "react"

import * as S from "../styles/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Posts from "../components/Posts/index"
import { graphql } from "gatsby"

const home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <>
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />

        <S.HomeContainer>
          <h2>Welcome to my Gastby Blog</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            nibh enim. Nam tristique tristique nulla vel elementum. Nullam id ex
            arcu. Quisque iaculis sed orci in blandit. Nulla nec vulputate
            justo, ac accumsan est. Curabitur dapibus euismod varius. Ut sed
            risus enim. Donec rhoncus eu ex eget viverra. Pellentesque eu
            vulputate ligula. Aliquam ultricies massa ac purus hendrerit
            consectetur. Aenean neque erat, vehicula in faucibus sed, fermentum
            ac velit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            nibh enim. Nam tristique tristique nulla vel elementum. Nullam id ex
            arcu. Quisque iaculis sed orci in blandit. Nulla nec vulputate
            justo, ac accumsan est. Curabitur dapibus euismod varius. Ut sed
            risus enim. Donec rhoncus eu ex eget viverra. Pellentesque eu
            vulputate ligula. Aliquam ultricies massa ac purus hendrerit
            consectetur. Aenean neque erat, vehicula in faucibus sed, fermentum
            ac velit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            nibh enim. Nam tristique tristique nulla vel elementum. Nullam id ex
            arcu. Quisque iaculis sed orci in blandit. Nulla nec vulputate
            justo, ac accumsan est. Curabitur dapibus euismod varius. Ut sed
            risus enim. Donec rhoncus eu ex eget viverra. Pellentesque eu
            vulputate ligula. Aliquam ultricies massa ac purus hendrerit
            consectetur. Aenean neque erat, vehicula in faucibus sed, fermentum
            ac velit.
          </p>
        </S.HomeContainer>
      </Layout>
    </>
  )
}

export default home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
