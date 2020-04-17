import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <StyledHero
          img={this.props.data.defaultBcg.childImageSharp.fluid}
        ></StyledHero>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
