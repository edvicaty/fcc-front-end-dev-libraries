import React from "react"
import { Box } from "theme-ui"

const Header = ({ children, ...props }) => {
  return (
    <Box
      as="nav"
      __css={{
        position: "fixed",
        display: "flex",
        justifyContent: "spaceBetween",
        top: "0",
        width: "100%",
        padding: "5px",
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Header
