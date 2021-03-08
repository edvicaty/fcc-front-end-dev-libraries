import React, { useState } from "react"
import fetch from "cross-fetch"
import { LayoutBlock, SectionBlock } from "../blocks"
import { Button, Text, Link } from "../components"
import { navLinks, lorem } from "../helpers/constants"
import {
  generateRandomArray,
  getRandomItem,
} from "../helpers/functions/generalFunctions"

const generateQuotesArray = amount => {
  const quotesArr = []
  for (let i = 0; i < amount; i++) {
    quotesArr.push({
      author: generateRandomArray(lorem.split(" "), 2).join(" "),
      text: generateRandomArray(lorem.split(" "), 10).join(" "),
    })
  }
  return quotesArr
}

const mockQuotes = generateQuotesArray(10)

const RandomQuotePage = () => {
  const [quote, setQuote] = useState(getRandomItem(mockQuotes))

  return (
    <LayoutBlock navLinks={navLinks}>
      <SectionBlock
        direction="column"
        title={{
          heading: "h2",
          text: "Random Lorem Ipsum quote (JS generated)",
        }}
      >
        <Text>{quote.text}</Text>
        <Text>{quote.author}</Text>
      </SectionBlock>

      <SectionBlock direction="column">
        <Button
          callback={() => {
            setQuote(getRandomItem(mockQuotes))
          }}
        >
          New quote
        </Button>
        <Link border={false} to="https://www.twitter.com/intent/tweet">
          Tweet quote
        </Link>
      </SectionBlock>
    </LayoutBlock>
  )
}

export default RandomQuotePage
