import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import useRooms from "../hooks/useRooms"
import RoomCard from "../components/roomCard"
import Layout from "../components/layout"

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

const Rooms = () => {
  const rooms = useRooms()
  return (
    <Layout>
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
          <RoomCard key={room.id} room={room} />
        ))}
      </RoomsList>
    </Layout>
  )
}

export default Rooms
