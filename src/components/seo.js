/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import React from "react"
// import PropTypes from "prop-types"
// import Helmet from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

// function SEO({ description, lang, meta, title }) {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             social {
//               twitter
//             }
//           }
//         }
//       }
//     `
//   )

//   const metaDescription = description || site.siteMetadata.description

//   return (
//     <Helmet
//       htmlAttributes={{
//         lang,
//       }}
//       title={title}
//       // titleTemplate={`%s | ${site.siteMetadata.title}`}
//       // meta={[
//       //   {
//       //     name: `description`,
//       //     content: metaDescription,
//       //   },
//       //   {
//       //     property: `og:title`,
//       //     content: title,
//       //   },
//       //   {
//       //     property: `og:description`,
//       //     content: metaDescription,
//       //   },
//       //   {
//       //     property: `og:type`,
//       //     content: `website`,
//       //   },
//       //   {
//       //     name: `twitter:card`,
//       //     content: `summary`,
//       //   },
//       //   {
//       //     name: `twitter:creator`,
//       //     content: site.siteMetadata.social.twitter,
//       //   },
//       //   {
//       //     name: `twitter:title`,
//       //     content: title,
//       //   },
//       //   {
//       //     name: `twitter:description`,
//       //     content: metaDescription,
//       //   },
//       // ].concat(meta)}
//     />
//   )
// }

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
// }

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// }

// export default SEO

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
const SEO = () => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const { title, description, siteUrl, social, author } = site.siteMetadata

  const seo = {
    title: title,
    description: description,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {/* {(article ? true : null) && <meta property="og:type" content="article" />} */}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {/* <meta name="twitter:card" content="summary_large_image" />      */}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
    </Helmet>
  )
}
export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  // article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  // article: false,
}
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`
