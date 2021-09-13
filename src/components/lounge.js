import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Button = styled(Link)`
  margin-bottom: 2rem;
  border-radius: 1rem;
  padding: 1rem 4rem;
  background-color: rgba(44, 62, 80, 0.85);
  color: #ffffff;
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  text-align: center;
`

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

const Lounge = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "salon.jpg" }) {
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
        <h3
          css={css`
            text-align: center;
            font-size: 3rem;
            margin-bottom: 3rem;
          `}
        >
          Convenciones & Eventos
        </h3>
        <p>
          2 Funcionales salones con capacidad de hasta 150 personas, un ambiente
          y una ubicación únicos. Con una excelente gastronomía están a su
          disposición para la realización de eventos empresariales y sociales
        </p>
      </div>
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt="Salón de Eventos"
      />
    </Container>
  )
}

export default Lounge
