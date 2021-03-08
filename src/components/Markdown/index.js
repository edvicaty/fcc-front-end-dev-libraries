import React from "react"
import marked from "marked"
import { Box } from "theme-ui"
import PropTypes from "prop-types"

const Markdown = ({ children }) => {
  return <Box dangerouslySetInnerHTML={{ __html: marked(children) }} />
}

Markdown.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Markdown
