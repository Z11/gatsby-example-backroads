import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={author => {
        return <h1>hello people</h1>
      }}
    ></StaticQuery>
  )
}

export default RegularHeader
