import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Navigation from "./navigation"
import { Link } from "gatsby"

const Home = styled(Link)`
  color: #ffffff;
  text-align: center;
  text-decoration: none;
`

const Header = () => {
  return (
    <header
      css={css`
        background-color: #333;
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
        <Home to="/">
          <h1>Hotel del Valle</h1>
        </Home>

        <Navigation />
      </div>
    </header>
  )
}

export default Header
