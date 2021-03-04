import * as React from "react"
import { LayoutBlock, CardBlock } from "../blocks"
import { navLinks } from "../helpers/constants"

const IndexPage = () => (
  <LayoutBlock navLinks={navLinks}>
    <CardBlock title={{ heading: "h2", text: "Some Card Text" }}>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
    </CardBlock>
  </LayoutBlock>
)

export default IndexPage
