import React from "react"
import { Box } from "theme-ui"
import PropTypes from "prop-types"

const Layout = ({ children, ...props }) => {
  return (
    <Box
      __css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        mt: "100px",
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
