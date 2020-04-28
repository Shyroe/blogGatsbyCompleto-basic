import React from "react"

import { TagContainer } from "../../styles/styled"
import _ from "lodash"
import { Link } from "gatsby"

const index = ({ tags }) => {
  return (
    <>
      <h2>Tags</h2>
      <>
        {tags.map((tag, index) => (
          <TagContainer key={index}>
            <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue}
            </Link>
          </TagContainer>
        ))}
      </>
    </>
  )
}

export default index
