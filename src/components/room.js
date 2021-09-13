import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import { Container, TextBox } from "./styles"

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
          <GatsbyImage image={image.gatsbyImageData} alt={title} />
          <TextBox>
            {" "}
            <p>{content}</p>
          </TextBox>
        </Container>
      </main>
    </Layout>
  )
}

export default Room
