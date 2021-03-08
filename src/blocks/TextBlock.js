import React from "react"
import { Wrapper, Heading } from "../components"
import { Box } from "theme-ui"
import PropTypes from "prop-types"

const TextBlock = ({ title, children, border, direction, ...props }) => {
  return (
    <Wrapper border={border} {...props}>
      {title && <Heading as={title.heading}>{title.text}</Heading>}

      <Box
        __css={{
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: direction,
        }}
      >
        {children}
      </Box>
    </Wrapper>
  )
}

TextBlock.propTypes = {
  title: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    direction: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
}

TextBlock.defaultProps = {
  direction: "row",
}

export default TextBlock
