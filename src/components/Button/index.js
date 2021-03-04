import React from "react"
import { Box } from "theme-ui"

const Button = ({ children, ...props }) => {
  return (
    <Box
      __css={{
        margin: "20px 15px",
        backgroundColor: "white",
        border: "1px solid lightGrey",
        borderRadius: "3px",
        fontSize: "base",
        boxShadow: "md",
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Button
