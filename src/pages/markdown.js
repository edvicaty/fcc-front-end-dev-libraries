import React, { useState } from "react"
import { LayoutBlock, TextBlock } from "../blocks"
import { Heading, Button, Text } from "../components"
import { navLinks, calculatorHelpers } from "../helpers/constants"
import { marked } from "marked"

const MarkdownPage = () => {
  const [text, setText] = useState(markdownExample)
  return (
    <LayoutBlock navLinks={navLinks}>
      <Heading as="h1">Markdown</Heading>
      <textarea
        id="editor"
        type="text"
        onChange={e => {
          setText(e.target.value)
        }}
      >
        {text}
      </textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </LayoutBlock>
  )
}

export default MarkdownPage
