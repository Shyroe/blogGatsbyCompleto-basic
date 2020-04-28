//Funcionando. Jeito simples
// import React from "react"

// import { Link } from "gatsby"
// const index = ({ data }) => {
//   const { edges } = data.allMarkdownRemark
//   const posts = edges.map(({ node }) => (
//     <div key={node.fields.slug}>
//       <Link to={node.fields.slug}>
//         <h2>{node.frontmatter.title}</h2>
//       </Link>
//       <p>{node.frontmatter.date}}</p>
//       {/* <p> {node.frontmatter.description} </p> */}
//       <p
//         dangerouslySetInnerHTML={{
//           __html: node.frontmatter.description || node.excerpt,
//         }}
//       />
//     </div>
//   ))
//   return <div>{posts}</div>
// }

// export default index

import React from "react"

import { Link } from "gatsby"
const index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <div>
      {posts.map(({ node }) => (
        <article key={node.fields.slug}>
          <header>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
            <small>{node.frontmatter.date}</small>
          </header>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            ></p>
          </section>
        </article>
      ))}
    </div>
  )
}

export default index
