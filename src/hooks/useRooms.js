import { graphql, useStaticQuery } from "gatsby"

const useRooms = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsRoom {
        nodes {
          title
          id
          slug
          resume
          image {
            gatsbyImageData
          }
        }
      }
    }
  `)

  return data.allDatoCmsRoom.nodes.map(room => ({
    title: room.title,
    id: room.id,
    resume: room.resume,
    image: room.image,
    slug: room.slug,
  }))
}

export default useRooms
