import React from "react"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

import LeafletMap from '../components/Leafletmap'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />


        <LeafletMap
          position={[46.431306, 30.715389]}
          zoom={11}
          markerText={"Hello, !this is a marker"}
        />


  </Layout>
)

export default IndexPage
