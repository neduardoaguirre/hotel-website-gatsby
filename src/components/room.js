import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const query = graphql`
  query ($slug: String!) {
    allDatoCmsRoom(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        image {
          gatsbyImageData
        }
      }
    }
  }
`
const Container = styled.main`
  padding: 3rem 0;
  max-width: 1200px;
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

const Room = ({
  data: {
    allDatoCmsRoom: { nodes },
  },
}) => {
  const { title, content, image } = nodes[0]

  return (
    <Layout>
      <main
        css={css`
          margin: 0 auto;
          max-width: 1200px;
          width: 80%;
        `}
      >
        <h1
          css={css`
            text-align: center;
            margin-top: 4rem;
          `}
        >
          {title}
        </h1>
        <Container>
          <GatsbyImage
            image={image.gatsbyImageData}
            alt={title}
            css={css`
              border-radius: 1rem;
            `}
          />
          <p>{content}</p>
        </Container>
      </main>
    </Layout>
  )
}

export default Room
