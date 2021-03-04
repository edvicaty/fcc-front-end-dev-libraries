import React from "react"
import { Box } from "theme-ui"
import PropTypes from "prop-types"

const Header = ({ children, ...props }) => {
  return (
    <Box
      as="nav"
      __css={{
        position: "fixed",
        display: "flex",
        justifyContent: "spaceBetween",
        backgroundColor: "white",
        zIndex: "30",
        top: "0",
        width: "100%",
        padding: "tiny",
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
