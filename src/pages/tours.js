import React, { Component } from "react"
import Layout from "../components/Layout"
import Button from "../examples/Button"
import RegularHeader from "../examples/RegularHeader"

export default class tours extends Component {
  render() {
    return (
      <Layout>
        hello from tour page !!!!
        <div>
          <Button big color="yellow">
            first button
          </Button>
          <Button color="red">second button</Button>
        </div>
        <RegularHeader></RegularHeader>
      </Layout>
    )
  }
}
