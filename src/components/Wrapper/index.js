import React from "react"
import { Box } from "theme-ui"
import PropTypes from "prop-types"

const Wrapper = ({ children, width, height, ...props }) => {
  return (
    <Box
      __css={{
        display: "flex",
        height,
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid lightGrey",
        borderRadius: "3px",
        margin: "tiny",
        padding: "tiny",
        boxShadow: "0px 0px 12px -2px rgba(0, 0, 0, 0.15)",
        width,
        padding: "medium",
        ":hover": {
          boxShadow: "0px 0px 12px -2px rgba(0, 0, 0, 0.5)",
        },
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
}

Wrapper.defaultProps = {
  width: "40vw",
  height: "180px",
}

export default Wrapper
