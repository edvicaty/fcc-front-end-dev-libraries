import React from "react"
import { Header, Navbar } from "../components"

const HeaderBlock = ({ links }) => {
  return (
    <Header>
      <Navbar links={links} />
    </Header>
  )
}

export default HeaderBlock
