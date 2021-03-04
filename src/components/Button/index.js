import React from "react"
import { Box } from "theme-ui"

const Button = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>
}

export default Button
