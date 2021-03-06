import React from "react"
import { Box } from "theme-ui"
import PropTypes from "prop-types"

const Heading = ({ as, children, ...props }) => {
  return (
    <Box
      __css={{
        mb: "medium",
      }}
      as={as}
      {...props}
    >
      {children}
    </Box>
  )
}

Heading.propTypes = {
  as: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Heading
