import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import SocialMedia from "./socialMedia"
import Contact from "./contact"

const Home = styled(Link)`
  display: flex;
  align-items: start;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
  @media (max-width: 768px) {
    margin: -5rem 0;
  }
`

const Footer = ({ title }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hotel_logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 250)
        }
      }
    }
  `)

  const year = new Date().getFullYear()
  return (
    <>
      <footer
        css={css`
          background-color: rgba(44, 62, 80);
          margin-top: 5rem;
          padding: 1rem;
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;
            @media (min-width: 768px) {
              display: flex;
              align-items: start;
              justify-content: space-between;
            }
          `}
        >
          <Home to={"/"}>
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt="Logo Hotel"
            />
          </Home>

          <Contact />
          <SocialMedia />
        </div>
      </footer>
      <p
        css={css`
          text-align: center;
          color: #ffffff;
          background-color: rgb(33, 44, 55);
          margin: 0;
          padding: 1rem;
        `}
      >
        {title}. Todos los derechos reservados {year} &copy;
      </p>
    </>
  )
}

export default Footer
