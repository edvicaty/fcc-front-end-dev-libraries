import * as React from "react"
import { LayoutBlock, CardBlock } from "../blocks"

const links = [
  { to: "/drum/", text: "Drum" },
  { to: "/markdown/", text: "Markdown" },
  { to: "/random-quote/", text: "Random Quote" },
  { to: "/clock/", text: "Clock" },
  { to: "/calculator/", text: "Calculator" },
]

const IndexPage = () => (
  <LayoutBlock navLinks={links}>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <CardBlock title={{ heading: "h2", text: "Some Card Text" }}>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </CardBlock>
  </LayoutBlock>
)

export default IndexPage
