import React from "react"
import { Box } from "theme-ui"
import PropTypes from "prop-types"

const Text = ({ children, sx, ...props }) => {
  return (
    <Box __css={sx} {...props}>
      {children}
    </Box>
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Text
