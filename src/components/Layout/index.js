import React from "react"
import { Box } from "theme-ui"

const Layout = ({ children, ...props }) => {
  return (
    <Box
      __css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Lato",
        fontSize: "18px",
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Layout
