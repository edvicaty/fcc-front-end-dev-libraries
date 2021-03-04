import React from "react"
import { Header, Navbar } from "../components"
import PropTypes from "prop-types"

const HeaderBlock = ({ links }) => {
  return (
    <Header>
      <Navbar links={links} />
    </Header>
  )
}

HeaderBlock.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
}

export default HeaderBlock
