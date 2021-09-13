import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaSwimmingPool, FaDumbbell, FaSpa } from "react-icons/fa"
import { Container, TextBox, H3 } from "./styles"

const SwimmingPool = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "piscina.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  return (
    <Container>
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt="Piscina"
      />
      <TextBox>
        <H3>Solárium con Piscina</H3>
        <p>
          <FaSwimmingPool />
          {"  "}Piscina exterior
        </p>
        <p>
          <FaDumbbell />
          {"  "}gimnasio
        </p>
        <p>
          <FaSpa />
          {"  "}Spa
        </p>
      </TextBox>
    </Container>
  )
}

export default SwimmingPool
