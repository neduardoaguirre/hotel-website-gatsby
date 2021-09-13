import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, TextBox, H2 } from "./styles"

const Restaurant = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "restaurant" } }) {
        nodes {
          title
          text1
          text2
          image1 {
            gatsbyImageData(width: 1200)
          }
          image2 {
            gatsbyImageData(width: 1200)
          }
        }
      }
    }
  `)

  const { title, image1, image2, text1, text2 } = data.allDatoCmsPage.nodes[0]

  return (
    <>
      <H2>{title}</H2>
      <Container>
        <TextBox>
          <p>{text1}</p>
        </TextBox>
        <GatsbyImage image={image1.gatsbyImageData} alt={title} />
      </Container>
      <Container>
        <GatsbyImage image={image2.gatsbyImageData} alt={title} />
        <TextBox>
          <p>{text2}</p>
        </TextBox>
      </Container>
    </>
  )
}

export default Restaurant
