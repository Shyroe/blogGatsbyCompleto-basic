import React from "react"

import { Link } from "gatsby"

import { StyledHeader } from "../../styles/styled"

const index = () => {
  return (
    <>
      <StyledHeader>
        <h2>Gatsby Handler</h2>
        <ul>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/tags"}>Tags</Link>
          </li>
        </ul>
      </StyledHeader>
    </>
  )
}

export default index

//Funcionando. title only.
// import React from "react"
// import { StaticQuery, graphql, Link } from "gatsby"

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query HeaderQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <header>
//         <Link to="/">
//           <h1>{data.site.siteMetadata.title}</h1>
//         </Link>
//       </header>
//     )}
//   />
// )
