import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Logo } from "./styles"
import {
  FaWhatsapp,
  FaPhone,
  FaFacebookSquare,
  FaInstagram,
  FaEnvelope,
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

const NavLink = styled.a`
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1rem;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;
  &:last-of-type {
    margin-right: 0;
  }
`
const Copyright = styled.p`
  text-align: center;
  color: #ffffff;
  background-color: rgb(33, 44, 55);
  margin: 0;
  padding: 1rem;
`
const ContainerFooter = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    align-items: start;
    justify-content: space-around;
  }
`

const H4 = styled.h4`
  margin: 1rem;
  text-align: center;
  color: #ffffff;
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
        <ContainerFooter>
          <Logo>
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt="Logo Hotel"
            />
          </Logo>
          <Nav>
            <H4>Dirección y Contacto</H4>

            <p>Ruta 7 km 1127 Uspallata, Mendoza – Argentina</p>
            <p>
              <FaPhone /> (+54) 9 2624 – 450003
            </p>
            <p>
              <FaWhatsapp /> +549 2624 - 54897485
            </p>
            <p>
              <NavLink href="mailto:info@hoteldelvalle.com.ar">
                <FaEnvelope
                  css={css`
                    vertical-align: middle;
                  `}
                />{" "}
                info@hoteldelvalle.com.ar
              </NavLink>
            </p>
          </Nav>
          <Nav>
            <H4>Nuestras Redes</H4>
            <div
              css={css`
                display: flex;
                justify-content: center;
              `}
            >
              <NavLink href="https://facebook.com">
                <FaFacebookSquare />
              </NavLink>
              <NavLink href="https://instgram.com">
                <FaInstagram />
              </NavLink>
            </div>
          </Nav>
        </ContainerFooter>
      </footer>
      <Copyright>
        {title}. Todos los derechos reservados {year} &copy;
      </Copyright>
    </>
  )
}

export default Footer
