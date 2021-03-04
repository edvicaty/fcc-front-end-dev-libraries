import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const LinkComponent = ({ children, to, ...props }) => {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  )
}

LinkComponent.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default LinkComponent
