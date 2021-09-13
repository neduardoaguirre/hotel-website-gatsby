import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import useRooms from "../hooks/useRooms"
import RoomPreview from "../components/roomPreview"
import Layout from "./layout"
import { H2 } from "./styles"

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
  const rooms = useRooms()
  return (
    <Layout>
      <H2>Nuestras Habitaciones</H2>
      <RoomsList>
        {rooms.map(room => (
          <RoomPreview key={room.id} room={room} />
        ))}
      </RoomsList>
    </Layout>
  )
}

export default IndexPage
