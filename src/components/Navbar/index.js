import React from "react"
import { Link } from "../index"
import { Box } from "theme-ui"
import PropTypes from "prop-types"

const Navbar = ({ links, ...props }) => {
  return (
    <Box
      __css={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        backgroundColor: "white",
        borderBottom: "1px solid lightGrey",
      }}
      {...props}
    >
      {links &&
        links.map(link => (
          <Link key={link.text} to={link.to}>
            {link.text}
          </Link>
        ))}
    </Box>
  )
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
}

export default Navbar
