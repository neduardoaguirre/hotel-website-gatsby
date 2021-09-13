import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import { FaBath, FaBriefcase, FaMountain } from "react-icons/fa"
import { Container, Button, H3 } from "./styles"

const RoomHome = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "rooms.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  return (
    <Container>
      <div
        css={css`
          padding: 2rem;
          border: 1px solid #f4f6f6;
        `}
      >
        <H3>Habitaciones para cada ocasión</H3>
        <p>
          <FaBath />
          {"  "}Baño Completo
        </p>
        <p>
          <FaBriefcase />
          {"  "}Despacho de trabajo
        </p>
        <p>
          <FaMountain />
          {"  "}Vistas privilegiadas
        </p>
        <Button to={"/rooms"}>Ver Habitaciones</Button>
      </div>
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt="Habitaciones"
      />
    </Container>
  )
}

export default RoomHome
