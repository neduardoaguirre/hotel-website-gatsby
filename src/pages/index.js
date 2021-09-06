import * as React from "react"
import Layout from "../components/layout"
import MainImage from "../components/mainImage"
import MainContent from "../components/mainContent"

const IndexPage = () => {
  const [isLoaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Layout>
      {isLoaded && <MainImage />}
      <MainContent />
    </Layout>
  )
}

export default IndexPage
