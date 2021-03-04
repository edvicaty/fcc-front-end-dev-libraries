import React from "react"
import { Box } from "theme-ui"
import PropTypes from "prop-types"

const Wrapper = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
