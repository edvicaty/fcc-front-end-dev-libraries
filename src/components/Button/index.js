import React from "react"
import { Box } from "theme-ui"
import PropTypes from "prop-types"

const Button = ({ children, id, callback, size, ...props }) => {
  return (
    <Box
      id={id}
      onClick={callback}
      __css={{
        cursor: "pointer",
        margin: "tiny",
        padding: size,
        backgroundColor: "white",
        border: "1px solid lightGrey",
        borderRadius: "3px",
        fontSize: "base",
        boxShadow: "0px 0px 12px -2px rgba(0, 0, 0, 0.15)",
        ":hover": {
          boxShadow: "0px 0px 12px -2px rgba(0, 0, 0, 0.4)",
        },
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
}

Button.defaultProps = {
  size: "tiny",
}

export default Button
