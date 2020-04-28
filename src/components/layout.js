import React from "react"
import { Link } from "gatsby"

import Header from "./Header/index"
import { StyledContainer } from "../styles/styled"

import GlobalStyle from "../styles/globalStyles"

const Layout = ({ location, title, children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledContainer>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </StyledContainer>
    </>
  )
}

export default Layout
