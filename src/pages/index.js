import React from "react"
import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LeafletMap from '../components/Leafletmap'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {

  return (
  <Layout>
    <SEO title="Home" />
    <LeafletMap
      position={[34.668876, -43.115289]}
      zoom={3}
      markers={data.allCases.edges}
    />
  </Layout>
  )
}

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
