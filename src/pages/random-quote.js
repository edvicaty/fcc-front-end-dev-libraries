import React, { useState } from "react"
import { LayoutBlock, TextBlock } from "../blocks"
import { Heading, Button, Text } from "../components"
import { navLinks, calculatorHelpers } from "../helpers/constants"

const shortLorem = "Lorem ipsum dolor sit amet"
const longLorem =
  "consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation"

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
////////////////////
const generateQuotesArray = amount => {
  const quotesArr = []
  for (let i = 0; i < amount; i++) {
    quotesArr.push({
      author: generateRandomArray(longLorem.split(" "), 2).join(" "),
      text: generateRandomArray(longLorem.split(" "), 10).join(" "),
    })
  }
  return quotesArr
}

const mockQuotes = generateQuotesArray(10)

const RandomQuotePage = () => {
  const [quote, setQuote] = React.useState(getRandomItem(mockQuotes))

  ;<LayoutBlock navLinks={navLinks}>
    <Heading as="h1">Random quote</Heading>
    <div id="quote-box">
      <p id="text">{quote.text}</p>
      <p id="author">{quote.author}</p>
      <button
        id="new-quote"
        onClick={() => {
          setQuote(getRandomItem(mockQuotes))
        }}
      >
        New quote
      </button>
      <a href="twitter.com/intent/tweet" id="tweet-quote">
        Tweet quote
      </a>
    </div>
  </LayoutBlock>
}

export default RandomQuotePage
