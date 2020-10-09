import {useStaticQuery} from 'gatsby'

export const data = useStaticQuery(graphql`
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
`)