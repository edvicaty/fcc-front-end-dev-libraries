import * as React from "react"
import { LayoutBlock, CardBlock } from "../blocks"
import { Text } from "../components"
import { navLinks } from "../helpers/constants"

const IndexPage = () => (
  <LayoutBlock navLinks={navLinks}>
    <CardBlock title={{ heading: "h2", text: "Some Card Text" }}>
      <Text>Some Text</Text>
      <Text>Some Text</Text>
      <Text>Some Text</Text>
    </CardBlock>
  </LayoutBlock>
)

export default IndexPage
