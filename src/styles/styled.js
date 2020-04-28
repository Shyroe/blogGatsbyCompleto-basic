import styled from "styled-components"

import { Tag } from "@styled-icons/boxicons-solid"

import { Link } from "gatsby"

export const StyledAutorText = styled.p`
  color: ${props => props.theme.primary};
  /* color: gray */
`

export const StyledContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: auto;
  border: 1px solid purple;
`

export const StyledHeader = styled.nav`
  width: 100%;
  height: 7rem;
  margin: auto 0;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  background-color: #444;
  color: #eee;
  margin-bottom: 8rem;

  & ul {
    display: flex;
    list-style: none;
    /* width: 100%; */
    margin-left: auto;
    /* border: 2px solid orangered; */

    & li {
      margin-right: 1rem;

      & a {
        text-decoration: none;
        color: white;

        &:hover {
          color: orangered;
        }
      }
    }
  }
`

export const HomeContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid blue;
`

export const BlogListContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  margin: 0 auto;
  /* border: 1px solid orangered; */
  margin-bottom: 2.5rem;
  width: 60%;
  cursor: pointer;
  &:hover {
    border: 2px solid cyan;
    padding: 1rem;
  }

  & div:first-of-type(1) {
    display: flex;
    flex-flow: column nowrap;

    & .title {
      color: #000;
    }

    & h4 {
      color: #666;
    }
  }
  & nav {
    display: flex;
    align-items: center;
    /* border: 1px solid green; */

    & ul {
      list-style: none;
      display: flex;

      & li {
        color: orangered;
        font-weight: 600;
        letter-spacing: 0.2rem;

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
`

export const IconTag = styled(Tag)`
  display: block;
  /* margin-right: 1rem; */
  margin: 0 1rem;
  /* fill: purple; */
  color: red;
  width: 1rem;
  height: 1rem;
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid goldenrod;
  margin-bottom: 3rem;

  & span {
    color: purple;
    font-weight: 600;
    margin: 0 auto;
    /* margin-left: 1.5rem; */
  }
`

export const StyledLink = styled(Link)`
  color: #666;
  text-decoration: none;
`

export const TagContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  border: 2px solid cyan;
  padding: auto 1rem;
  border-radius: 10rem;
`

export const DisqusWrapper = styled.footer`
  margin-top: 3rem;
`
