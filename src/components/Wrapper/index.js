import React from "react"
import { Box } from "theme-ui"
import PropTypes from "prop-types"

const Wrapper = ({ children, width, border, direction, ...props }) => {
  return (
    <Box
      __css={{
        display: "flex",
        flexDirection: direction,
        justifyContent: "space-around",
        border: border ? "1px solid lightGrey" : "none",
        borderRadius: "3px",
        margin: "tiny",
        padding: "tiny",
        boxShadow: border ? "0px 0px 12px -2px rgba(0, 0, 0, 0.15)" : null,
        width,
        padding: "medium",
        ":hover": border
          ? {
              boxShadow: "0px 0px 12px -2px rgba(0, 0, 0, 0.5)",
            }
          : null,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.bool,
  direction: PropTypes.string,
}

Wrapper.defaultProps = {
  width: "70vw",
  border: false,
  direction: "column",
}

export default Wrapper
