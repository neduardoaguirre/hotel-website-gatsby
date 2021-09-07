import * as React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import MainImage from "../components/mainImage"
import MainContent from "../components/mainContent"
import useRooms from "../hooks/useRooms"
import RoomPreview from "../components/roomPreview"

const RoomsList = styled.ul`
  list-style: none;
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {
  const [isLoaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    setLoaded(true)
  }, [])

  const rooms = useRooms()
  console.log(rooms)

  return (
    <Layout>
      {isLoaded && <MainImage />}
      <MainContent />
      <h2
        css={css`
          text-align: center;
          margin-top: 4rem;
          font-size: 4rem;
        `}
      >
        Nuestras Habitaciones
      </h2>
      <RoomsList>
        {rooms.map(room => (
          <RoomPreview key={room.id} room={room} />
        ))}
      </RoomsList>
    </Layout>
  )
}

export default IndexPage
