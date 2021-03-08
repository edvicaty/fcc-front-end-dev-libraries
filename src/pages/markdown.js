import React, { useState } from "react"
import { LayoutBlock, TextBlock } from "../blocks"
import { Heading, Button, Text } from "../components"
import { navLinks, calculatorHelpers } from "../helpers/constants"

const shortLorem = "Lorem ipsum dolor sit amet"
const longLorem =
  "consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation"

// ---------------------- General Helpers ---------------------------------

const getRandomIndex = array => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return randomIndex
}

const generateRandomArray = (array, length) => {
  const randomArr = []
  for (i = 0; i < length; i++) {
    const index = getRandomIndex(array)
    randomArr.push(array[index])
  }
  return randomArr
}

const getRandomItem = array => {
  const index = getRandomIndex(array)
  const randomItem = array[index]
  return randomItem
}

const markdownExample = `# h1   
## h2  
### h3  
[link](https://www.freecodecamp.com)  
${"```"}javascript
var s = "JavaScript syntax highlighting";
alert(s);
${"```"} 
${"`"}inline code${"`"} 
- list 

> blockquote 

image: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1") 

**strong** 
`

const MarkdownPage = () => {
  const [text, setText] = useState(markdownExample)
  return (
    <LayoutBlock navLinks={navLinks}>
      <Heading as="h1">Markdown</Heading>
      <textarea
        id="editor"
        type="text"
        onChange={e => {
          setText(e.target.value)
        }}
      >
        {text}
      </textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </LayoutBlock>
  )
}

export default MarkdownPage
