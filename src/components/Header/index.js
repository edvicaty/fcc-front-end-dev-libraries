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
        top: "0",
        width: "100%",
        zIndex: "30",
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
