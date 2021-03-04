import React from "react"
import { Link } from "../index"
import { Box } from "theme-ui"
import PropTypes from "prop-types"

const Navbar = ({ links, ...props }) => {
  return (
    <Box
      __css={{
        display: "flex",
        justifyContent: "flexStart",
      }}
      {...props}
    >
      {links &&
        links.map(link => (
          <Link
            sx={{
              margin: "2px 12px",
            }}
            key={link.text}
            to={link.to}
          >
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
