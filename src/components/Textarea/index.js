import React from "react"
import PropTypes from "prop-types"

const Textarea = ({ callback, name, rows, cols, children }) => {
  return (
    <textarea
      name={name}
      rows={rows}
      cols={cols}
      type="text"
      onChange={callback}
    >
      {children}
    </textarea>
  )
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  rows: PropTypes.string,
  cols: PropTypes.string,
  callback: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

Textarea.defaultProps = {
  rows: "20",
  cols: "70",
}

export default Textarea
