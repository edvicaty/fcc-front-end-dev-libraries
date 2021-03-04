import React from "react"
import { Box } from "theme-ui"

const Text = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>
}

export default Text
