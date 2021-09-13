import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Button = styled(Link)`
  border-radius: 1rem;
  padding: 1rem 4rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #ffffff;
  display: block;
  text-decoration: none;
  font-weight: 500;
  text-align: center;
`

const RoomCard = ({ room }) => {
  const { image, title, slug, resume } = room
  return (
    <div
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
      `}
    >
      <GatsbyImage image={image.gatsbyImageData} alt={title} />
      <div
        css={css`
          padding: 2rem;
        `}
      >
        <h3>{title}</h3>
        <p>{resume}</p>
        <Button to={slug}>Ver detalle</Button>
      </div>
    </div>
  )
}

export default RoomCard
