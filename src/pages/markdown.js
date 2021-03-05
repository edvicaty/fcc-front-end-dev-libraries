import React, { useState } from "react"
import { LayoutBlock, TextBlock } from "../blocks"
import { Heading, Button, Text } from "../components"
import { navLinks, calculatorHelpers } from "../helpers/constants"

const MarkdownPage = () => (
  <LayoutBlock navLinks={navLinks}>
    <Heading as="h1">Markdown</Heading>
  </LayoutBlock>
)

export default MarkdownPage
