import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  FaWhatsapp,
  FaPhone,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
  p {
    margin: 1rem;
    color: #ffffff;
    text-align: center;
  }
`

const NavLink = styled(Link)`
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1rem;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;
  &:last-of-type {
    margin-right: 0;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    align-items: start;
    justify-content: space-around;
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
          padding: 1rem;
        `}
      >
        <Container>
          <Logo>
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt="Logo Hotel"
            />
          </Logo>
          <Nav>
            <h4
              css={css`
                margin: 1rem;
                text-align: center;
                color: #ffffff;
              `}
            >
              Direccion y Contacto
            </h4>

            <p>Ruta 7 km 1127 Uspallata, Mendoza – Argentina</p>
            <p>
              <FaPhone /> (+54) 9 2624 – 450003
            </p>
            <p>
              <FaPhone /> (+54) 9 2624 – 450004
            </p>
            <p>
              <FaWhatsapp /> +549 2624 - 54897485
            </p>
          </Nav>
          <Nav>
            <h4
              css={css`
                margin: 1rem;
                text-align: center;
                color: #ffffff;
              `}
            >
              Nuestras Redes
            </h4>
            <div
              css={css`
                display: flex;
                justify-content: center;
              `}
            >
              <NavLink to={"/#"}>
                <FaFacebookSquare />
              </NavLink>
              <NavLink to={"/#"}>
                <FaInstagram />
              </NavLink>
            </div>
          </Nav>
        </Container>
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
