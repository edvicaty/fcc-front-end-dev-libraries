import React from "react"
import { Link } from "../index"
import { Box } from "theme-ui"

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
          <Link key={link.text} to={link.to}>
            {link.text}
          </Link>
        ))}
    </Box>
  )
}

export default Navbar
