import * as React from "react"
import Layout from "../components/layout"
import Home from "../components/home"
import RoomHome from "../components/roomHome"
import SwimmingPool from "../components/swimmingPool"
import Lounge from "../components/lounge"

const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <RoomHome />
      <SwimmingPool />
      <Lounge />
    </Layout>
  )
}

export default IndexPage
