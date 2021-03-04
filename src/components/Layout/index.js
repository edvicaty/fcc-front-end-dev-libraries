import React from "react"
import { Box } from "theme-ui"

const Layout = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>
}

export default Layout
