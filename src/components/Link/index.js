import React from "react"
import { Link } from "gatsby"

const LinkComponent = ({ children, to, ...props }) => {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  )
}

export default LinkComponent
