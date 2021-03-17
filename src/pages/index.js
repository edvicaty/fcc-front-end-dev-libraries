import * as React from "react"
import { LayoutBlock, SectionBlock } from "../blocks"
import { Text } from "../components"
import { navLinks } from "../helpers/constants"
import { connect } from "react-redux"

import { toggleDarkMode } from "../state/app"

const IndexPage = ({ isDarkMode, dispatch }) => (
  <LayoutBlock navLinks={navLinks}>
    <SectionBlock
      title={{ heading: "h1", text: "FCC front-end libraries projects" }}
    >
      <Text>https://www.freecodecamp.org/learn/front-end-libraries/</Text>
    </SectionBlock>
    <button onClick={() => { dispatch(toggleDarkMode(!isDarkMode)) }} >Dark Mode {isDarkMode ? "on" : "off"}</button>
  </LayoutBlock>
)


export default connect(state=>({
  isDarkMode: state.app.isDarkMode
}), null)(IndexPage)

// export default IndexPage
