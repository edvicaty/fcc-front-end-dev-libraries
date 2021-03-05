import * as React from "react"
import { LayoutBlock, TextBlock } from "../blocks"
import { Text } from "../components"
import { navLinks } from "../helpers/constants"

const IndexPage = () => (
  <LayoutBlock navLinks={navLinks}>
    <TextBlock title={{ heading: "h2", text: "Some Card Text" }}>
      <Text>Some Text</Text>
      <Text>Some Text</Text>
      <Text>Some Text</Text>
    </TextBlock>
  </LayoutBlock>
)

export default IndexPage
