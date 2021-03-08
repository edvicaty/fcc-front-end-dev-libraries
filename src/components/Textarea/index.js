import React from "react"
import PropTypes from "prop-types"

const TextArea = ({ callback, name, rows, cols, border, children }) => {
  return (
    <textarea
      style={{
        padding: "1rem",
        border: border ? "1px solid lightGrey" : "none",
        boxShadow: border ? "0px 0px 12px -2px rgba(0, 0, 0, 0.3)" : null,
      }}
      name={name}
      rows={rows}
      cols={cols}
      type="text"
      onChange={callback}
      value={children}
    />
  )
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  rows: PropTypes.string,
  cols: PropTypes.string,
  callback: PropTypes.func.isRequired,
  children: PropTypes.node,
  border: PropTypes.bool,
}

TextArea.defaultProps = {
  rows: "20",
  cols: "50",
  border: true,
  children: undefined,
}

export default TextArea
