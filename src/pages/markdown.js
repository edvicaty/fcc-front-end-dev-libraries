import React, { useState } from "react"
import { LayoutBlock } from "../blocks"
import { Heading, Markdown, Textarea } from "../components"
import { navLinks, markdownHelpers } from "../helpers/constants"

const MarkdownPage = () => {
  const [text, setText] = useState(markdownHelpers.text)
  return (
    <LayoutBlock navLinks={navLinks}>
      <Heading as="h1">Markdown</Heading>
      <Textarea
        name="markdown input"
        callback={e => {
          setText(e.target.value)
        }}
      >
        {text}
      </Textarea>
      <Markdown>{text}</Markdown>
    </LayoutBlock>
  )
}

export default MarkdownPage
