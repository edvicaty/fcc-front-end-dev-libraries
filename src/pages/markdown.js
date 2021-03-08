import React, { useState } from "react"
import { LayoutBlock, SectionBlock } from "../blocks"
import { Heading, Markdown, Textarea } from "../components"
import { navLinks, markdownHelpers } from "../helpers/constants"

const MarkdownPage = () => {
  const [text, setText] = useState(markdownHelpers.text)
  return (
    <LayoutBlock navLinks={navLinks}>
      <SectionBlock title={{ heading: "h1", text: "Markdown" }}>
        <Textarea
          name="markdown input"
          callback={e => {
            setText(e.target.value)
          }}
        >
          {text}
        </Textarea>
        <Markdown>{text}</Markdown>
      </SectionBlock>
    </LayoutBlock>
  )
}

export default MarkdownPage
