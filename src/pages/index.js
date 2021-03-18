import * as React from "react"
import { LayoutBlock, SectionBlock } from "../blocks"
import { Text } from "../components"
import { navLinks } from "../helpers/constants"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actionCreators';

const IndexPage = ({ isDarkMode, dispatch, ...props }) => {
  console.log(`props`, props)
  return <LayoutBlock navLinks={navLinks}>
    <SectionBlock
      title={{ heading: "h1", text: "FCC front-end libraries projects" }}
    >
      <Text>https://www.freecodecamp.org/learn/front-end-libraries/</Text>
    </SectionBlock>
    <button onClick={() => { props.changeDarkMode() }} >Dark Mode {props.darkMode.isDarkMode ? "on" : "off"}</button>
  </LayoutBlock>
}

function mapStateToProps(state) {
  console.log(`state`, state)
  return {
    darkMode: { isDarkMode: state.darkMode.isDarkMode },
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)

