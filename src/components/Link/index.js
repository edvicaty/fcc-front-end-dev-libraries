import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Text } from "../index"

const LinkComponent = ({ children, to, sx, border, ...props }) => {
  return (
    <Link
      style={{
        textDecoration: "none",
        width: "100%",
        backgroundColor: "white",
      }}
      to={to}
      {...props}
    >
      <Text
        sx={{
          ...sx,
          color: "text",
          height: "100%",
          padding: "small",
          ":hover": {
            boxShadow: border ? "0px 0px 12px -2px rgba(0, 0, 0, 0.4)" : null,
            backgroundColor: "#f2f2f2",
          },
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
  border: PropTypes.bool,
}

LinkComponent.defaultProps = {
  border: true,
}

export default LinkComponent
