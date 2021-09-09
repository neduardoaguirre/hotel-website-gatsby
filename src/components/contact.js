import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { FaWhatsapp, FaPhone } from "react-icons/fa"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  /* padding-bottom: 3rem; */
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
  &.current-page {
    border-bottom: 2px solid #ffffff;
  }
`

const Contact = () => {
  return (
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
        <FaPhone /> (+54) 9 02624 – 450003
      </p>
      <p>
        <FaPhone /> (+54) 9 02624 – 450004
      </p>
      <p>
        <FaWhatsapp /> +5492624 - 54897485
      </p>
    </Nav>
  )
}

export default Contact
