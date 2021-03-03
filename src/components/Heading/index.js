import React from "react"
import { Box } from "theme-ui"

const Heading = ({ as, children, ...props }) => {
  return (
    <Box as={as} {...props}>
      {children}
    </Box>
  )
}

export default Heading
