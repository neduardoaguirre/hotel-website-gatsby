import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const Image = styled(BackgroundImage)`
  height: 700px;
`
const ImageText = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.3),
    rgba(34, 49, 63, 0.3)
  );
  color: #ffffff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    margin: 0%;
    text-align: center;
    @media (min-width: 992px) {
      font-size: 5.8rem;
    }
  }

  p {
    font-size: 2rem;
    @media (min-width: 992px) {
      font-size: 2.5rem;
    }
  }
`

const Home = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "inicio.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Image Tag="section" fluid={image.childImageSharp.fluid}>
      <ImageText>
        <h1>Bienvenido a Hotel del Valle</h1>
        <p>Un espacio de relax</p>
      </ImageText>
    </Image>
  )
}

export default Home
