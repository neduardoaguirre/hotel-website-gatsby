import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const TextContainer = styled.div`
  padding-top: 2rem;
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
  }
`

const MainContent = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "main-content" } }) {
        nodes {
          title
          content
          image {
            gatsbyImageData
          }
        }
      }
    }
  `)

  const { title, content, image } = data.allDatoCmsPage.nodes[0]

  return (
    <>
      <h2
        css={css`
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
        `}
      >
        {title}
      </h2>
      <TextContainer>
        <p>{content}</p>
        <GatsbyImage
          image={image.gatsbyImageData}
          alt="Descubrí nuestro hotel"
        />
      </TextContainer>
    </>
  )
}

export default MainContent
