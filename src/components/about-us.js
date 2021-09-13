import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Image = styled(GatsbyImage)`
  border-radius: 1rem;
`

const Container = styled.section`
  padding-top: 3rem;
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
  }
  :last-of-type {
    padding-bottom: 3rem;
  }
`

const AboutUsContent = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "about-us" } }) {
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
      <h2
        css={css`
          margin-top: 4rem;
          text-align: center;
          font-size: 4rem;
        `}
      >
        {title}
      </h2>
      <Container>
        <p>{text1}</p>
        <Image image={image1.gatsbyImageData} alt={title} />
      </Container>
      <h2
        css={css`
          margin-top: 4rem;
          text-align: center;
          font-size: 4rem;
        `}
      >
        El Valle
      </h2>
      <Container>
        <Image image={image2.gatsbyImageData} alt={title} />
        <p>{text2}</p>
      </Container>
    </>
  )
}

export default AboutUsContent
