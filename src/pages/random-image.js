import React, { useState } from "react"
import fetch from "cross-fetch"
import { StaticImage } from "gatsby-plugin-image"
import { LayoutBlock, SectionBlock } from "../blocks"
import { Text, Wrapper } from "../components"
import { navLinks, imageHelpers } from "../helpers/constants"

const RandomImagePage = () => {
  return (
    <LayoutBlock navLinks={navLinks}>
      <SectionBlock title={{ heading: "h1", text: "Image comparison" }}>
        <Text>Compare html image vs Gatsby Image</Text>
      </SectionBlock>
      {imageHelpers &&
        imageHelpers.map(image => {
          return (
            <SectionBlock border title={{ heading: "h2", text: image.name }}>
              <Wrapper>
                <Text as="h3">Gatsby</Text>
                <StaticImage src={image.url} alt={image.name} />
              </Wrapper>
              <Wrapper>
                <Text as="h3">HTML</Text>
                <img src={image.url} alt={image.name} />
              </Wrapper>
            </SectionBlock>
          )
        })}
    </LayoutBlock>
  )
}

export default RandomImagePage
