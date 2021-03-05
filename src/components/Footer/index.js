import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const Footer = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        zIndex: "30",
        backgroundColor: "white",
        padding: "20px",
        mt: "xlarge",
        position: "fixed",
        bottom: "0",
      }}
    >
      {children}
    </Box>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Footer
