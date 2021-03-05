import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const Footer = ({ children }) => {
  return (
    <Box
      sx={{
        // position: "relative",
        // bottom: "0",
        width: "100%",
        zIndex: "30",
        backgroundColor: "white",
        borderTop: "1px solid lightGrey",
        padding: "20px",
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
