import React from "react"
import { Layout, Text, Footer } from "../components"
import { HeaderBlock } from "./index"
import PropTypes from "prop-types"

const LayoutBlock = ({ navLinks, text, children }) => {
  return (
    <Layout>
      <HeaderBlock links={navLinks} />
      {children}
      <Footer>
        <Text>{text}</Text>
      </Footer>
    </Layout>
  )
}

LayoutBlock.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  text: PropTypes.string,
  children: PropTypes.node.isRequired,
}

LayoutBlock.defaultProps = {
  text: "Edgar Villavicencio",
}

export default LayoutBlock
