import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'


const cases = ({ children }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <>
        <span>
          
          saf{data.allCases.edges}
          {children}
        </span>
      </>
    )}
  />
)

export default cases