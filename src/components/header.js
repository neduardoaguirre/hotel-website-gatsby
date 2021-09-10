import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Navigation from "./navigation"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Logo = styled(Link)`
  display: flex;
  align-items: start;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
`

const Header = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hotel_logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 250)
        }
      }
    }
  `)

  return (
    <header
      css={css`
        background-color: rgba(44, 62, 80);
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <Logo to="/">
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            alt="Logo Hotel"
          />
        </Logo>

        <Navigation />
      </div>
    </header>
  )
}

export default Header
