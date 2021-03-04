import React from "react"
import { Box } from "theme-ui"
import PropTypes from "prop-types"

const Button = ({ children, ...props }) => {
  return (
    <Box
      __css={{
        margin: "large medium",
        backgroundColor: "white",
        border: "1px solid lightGrey",
        borderRadius: "3px",
        fontSize: "base",
        boxShadow: "0px 0px 12px -2px rgba(0, 0, 0, 0.15)",
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
