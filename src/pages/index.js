import * as React from "react"
import { LayoutBlock, TextBlock } from "../blocks"
import { Text } from "../components"
import { navLinks } from "../helpers/constants"

const IndexPage = () => (
  <LayoutBlock navLinks={navLinks}>
    <TextBlock
      title={{ heading: "h1", text: "FCC front-end libraries projects" }}
    >
      <Text>https://www.freecodecamp.org/learn/front-end-libraries/</Text>
    </TextBlock>
  </LayoutBlock>
)

export default IndexPage
