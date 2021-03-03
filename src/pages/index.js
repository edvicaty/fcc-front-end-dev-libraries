import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/drum/">drum</Link> <br />
      <Link to="/markdown/">markdown</Link> <br />
      <Link to="/random-quote/">random quote</Link> <br />
      <Link to="/clock/">clock</Link> <br />
      <Link to="/calculator/">calculator</Link>
    </p>
  </>
)

export default IndexPage
