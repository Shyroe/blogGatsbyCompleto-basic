import React from "react"

import { Link } from "gatsby"

import { BlogListContainer, IconTag, StyledLink } from "../../styles/styled"

const index = ({ blogList }) => {
  return (
    <>
      {blogList.map(({ node }) => (
        <StyledLink to={`/${node.fields.slug}`}>
          <BlogListContainer key={node.fields.slug}>
            <small>
              {node.frontmatter.date} - Leitura de {node.timeToRead} min
            </small>
            <div>
              <h2 className="title">{node.frontmatter.title}</h2>
              <h4>{node.frontmatter.description}</h4>
            </div>
            <nav>
              <>
                <IconTag />
                {node.frontmatter.tags.map((tag, index) => (
                  <ul key={index}>
                    <li>
                      {tag},{}{" "}
                    </li>
                  </ul>
                ))}
              </>
            </nav>
          </BlogListContainer>
        </StyledLink>
      ))}
    </>
  )
}

export default index
