import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { LayoutBlock, SectionBlock } from "../blocks"
import { Text } from "../components"
import { navLinks } from "../helpers/constants"
const RandomImagePage = () => {
  return (
    <LayoutBlock navLinks={navLinks}>
      <SectionBlock
        direction="column"
        title={{ heading: "h1", text: "Image comparison" }}
      >
        <Text>Compare html image vs Gatsby Image</Text>
        <Text>
          While using 'StaticImage' from gatsby-plugin-image, its props must be
          written on the component itself, currently, isn't allowed to passed
          via external functions or by making reference to another file. This
          happens because images are made at buildtime from the provided URL's.
        </Text>
        <Text>
          While using variables to be referenced on the props of 'StaticImage',
          such variables must be defined on the same scope that the image is.
        </Text>
        <Text>
          If you need to reference vaiables on the Image props, you should use
          Gatsby 'GatsbyImage' instead of 'StaticImage'
        </Text>
      </SectionBlock>
      <SectionBlock border title={{ heading: "h2", text: "Gatsby" }}>
        <StaticImage
          src="https://ih1.redbubble.net/image.445130528.1102/flat,750x1000,075,f.u2.jpg"
          alt="doge gatsby"
          width={300}
        />
      </SectionBlock>
      <SectionBlock border title={{ heading: "h2", text: "HTML" }}>
        <img
          src="https://ih1.redbubble.net/image.445130528.1102/flat,750x1000,075,f.u2.jpg"
          alt="doge html"
          style={{ width: "300px", height: "auto" }}
        />
      </SectionBlock>
    </LayoutBlock>
  )
}

export default RandomImagePage
