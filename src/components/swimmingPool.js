import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { FaSwimmingPool, FaDumbbell, FaSpa } from "react-icons/fa"

const Container = styled.section`
  padding: 3rem 0;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }
  p {
    line-height: 2;
    text-justify: justify;
    :last-of-type {
      padding-bottom: 2rem;
    }
  }
`

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
      <div
        css={css`
          padding: 2rem;
          border: 1px solid #f4f6f6;
        `}
      >
        <h3
          css={css`
            text-align: center;
            font-size: 3rem;
            margin-bottom: 3rem;
          `}
        >
          Solárium con Piscina
        </h3>
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
      </div>
    </Container>
  )
}

export default SwimmingPool
