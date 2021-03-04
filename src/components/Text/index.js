import React from "react"
import { Box } from "theme-ui"
import PropTypes from "prop-types"

const Text = ({ children, ...props }) => {
  return (
    <Box __css={{ margin: "tiny" }} {...props}>
      {children}
    </Box>
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Text
