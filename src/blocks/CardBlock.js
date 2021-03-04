import React from "react"
import { Wrapper, Heading } from "../components/"
import { Box } from "theme-ui"
import PropTypes from "prop-types"

const CardBlock = ({ title, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Heading as={title.heading}>{title.text}</Heading>
      <Box
        __css={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {children}
      </Box>
    </Wrapper>
  )
}

CardBlock.propTypes = {
  title: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
}

export default CardBlock
