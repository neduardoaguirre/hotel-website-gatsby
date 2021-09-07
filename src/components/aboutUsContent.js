import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Content = styled.main`
  padding-top: 4rem;
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

const AboutUsContent = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "about-us" } }) {
        nodes {
          title
          content
          image {
            gatsbyImageData(width: 1200)
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
          margin-top: 4rem;
          text-align: center;
          font-size: 4rem;
        `}
      >
        {title}
      </h2>
      <Content>
        <p>{content}</p>
        <GatsbyImage image={image.gatsbyImageData} alt="about us" />
      </Content>
    </>
  )
}

export default AboutUsContent
