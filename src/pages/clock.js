import * as React from "react"
import { LayoutBlock, CardBlock } from "../blocks"
import { Text, Heading, Button } from "../components"
import { navLinks } from "../helpers/constants"

const ClockPage = () => (
  <LayoutBlock navLinks={navLinks}>
    <Heading as="h1">25 + 5 Clock</Heading>
    <CardBlock title={{ heading: "h2", text: "Break Length" }}>
      <Button></Button>
      <Button></Button>
    </CardBlock>
    <CardBlock title={{ heading: "h2", text: "Session Length" }}></CardBlock>
  </LayoutBlock>
)

export default ClockPage
