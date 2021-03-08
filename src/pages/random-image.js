import React, { useState } from "react"
import fetch from "cross-fetch"
import { StaticImage } from "gatsby-plugin-image"
import { LayoutBlock, SectionBlock } from "../blocks"
import { Button, Text, Link } from "../components"
import {
  navLinks,
  imageHelpers,
  randomQuotesHelpers,
} from "../helpers/constants"
import {
  generateRandomArray,
  getRandomItem,
} from "../helpers/functions/generalFunctions"
//TODO: static image html tag
//TODO: static image gatsby-image
//TODO: static image gatsby-plugin-image

//TODO: fetched image html tag
//TODO: fetched image gatsby-plugin-image

const RandomImagePage = () => {
  const [apiQuote, setApiQuote] = useState({
    text: "Click 'New quote' to fetch from the API",
    author: "Edgar Villavicencio",
  })

  return (
    <LayoutBlock navLinks={navLinks}>
      <SectionBlock title={{ heading: "h1", text: "Image comparison" }}>
        <Text>Compare html image vs Gatsby Image</Text>
      </SectionBlock>

      <SectionBlock
        direction="column"
        title={{
          heading: "h2",
          text: "html image from URL",
        }}
      >
        <img src={imageHelpers.highResImage} alt="fetched html image" />
      </SectionBlock>

      {/* <SectionBlock
        direction="column"
        title={{
          heading: "h2",
          text: "new Gatsby image from URL",
        }}
      >
        <StaticImage src={imageHelpers.highResImage} alt="fetched gatsby" />
      </SectionBlock> */}

      <SectionBlock
        direction="column"
        title={{
          heading: "h2",
          text: "new Gatsby image from 'images folder",
        }}
      >
        <StaticImage src="../images/highRes.jpg" alt="static gatsby" />
      </SectionBlock>
    </LayoutBlock>
  )
}

export default RandomImagePage
