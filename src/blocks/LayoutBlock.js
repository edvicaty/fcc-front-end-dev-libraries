import React from "react"
import { Layout } from "../components"
import { HeaderBlock } from "./index"
import PropTypes from "prop-types"

const LayoutBlock = ({ navLinks, children }) => {
  return (
    <Layout>
      <HeaderBlock links={navLinks} />
      {children}
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
  children: PropTypes.node.isRequired,
}

export default LayoutBlock
