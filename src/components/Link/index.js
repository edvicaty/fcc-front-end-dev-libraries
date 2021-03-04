import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Text } from "../index"

const LinkComponent = ({ children, to, sx, ...props }) => {
  return (
    <Link style={{ textDecoration: "none", width: "100%" }} to={to} {...props}>
      <Text
        sx={{
          ...sx,
          ":hover": { transform: "scale(1.1) translateY(0.3rem)" },
        }}
      >
        {children}
      </Text>
    </Link>
  )
}

LinkComponent.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default LinkComponent
