import React from "react"
import { Link } from "../components"
import { Box } from "theme-ui"

const NavbarBlock = ({ links, ...props }) => {
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

export default NavbarBlock
