import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  /* padding-bottom: 3rem; */
  @media (min-width: 768px) {
    padding-bottom: 0;
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

const SocialMedia = () => {
  return (
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
  )
}

export default SocialMedia
