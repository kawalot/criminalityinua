import React from "react"
import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LeafletMap from '../components/Leafletmap'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <LeafletMap
    position={[46.431306, 30.715389]}
    zoom={11}
    markerText={"Hello, !this is a marker"}
    />
      About {data.allCases.edges.forEach(element => (console.log(element))) }

  </Layout>
)
export const query = graphql`
    query {
      allCases {
        edges {
          node {
            registry_number
            url
            longitude
            latitude
            icon
            date
            comment
            color
            address
          }
        }
      }
    }
  `
export default IndexPage
