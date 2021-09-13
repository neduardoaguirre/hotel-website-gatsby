import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, TextBox, H3 } from "./styles"

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
      <TextBox>
        <H3>Convenciones & Eventos</H3>
        <p>
          Dos salones funcionales con capacidad de hasta 150 personas, un
          ambiente y una ubicación únicos. Con una excelente gastronomía están a
          su disposición para la realización de eventos empresariales y sociales
        </p>
      </TextBox>
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt="Salón de Eventos"
      />
    </Container>
  )
}

export default Lounge
