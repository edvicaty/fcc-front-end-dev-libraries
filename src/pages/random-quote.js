import React, { useState } from "react"
import { LayoutBlock, TextBlock } from "../blocks"
import { Heading, Button, Text } from "../components"
import { navLinks, calculatorHelpers } from "../helpers/constants"

const RandomQuotePage = () => (
  <LayoutBlock navLinks={navLinks}>
    <Heading as="h1">Random quote</Heading>
  </LayoutBlock>
)

export default RandomQuotePage
