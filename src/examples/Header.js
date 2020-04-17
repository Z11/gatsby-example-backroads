import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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

const Header = () => {
  const { title, author } = useStaticQuery(getSiteData).site.siteMetadata

  return (
    <div>
      <h1>title: {title}</h1>
      <h1>author: {author}</h1>
    </div>
  )
}

export default Header
