import React from "react"
import { Box } from "theme-ui"
import PropTypes from "prop-types"

const Wrapper = ({ children, ...props }) => {
  return (
    <Box
      __css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid lightGrey",
        borderRadius: "3px",
        margin: "3px",
        padding: "3px",
        boxShadow: "0px 0px 12px -2px rgba(0, 0, 0, 0.15)",
        width: "40vw",
        padding: "5px 0",
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
