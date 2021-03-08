import React, { useState } from "react"
import fetch from "cross-fetch"
import { LayoutBlock, SectionBlock } from "../blocks"
import { Button, Text, Link } from "../components"
import { navLinks, lorem, randomQuotesHelpers } from "../helpers/constants"
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
  const [apiQuote, setApiQuote] = useState({
    text: "Click 'New quote' to fetch from the API",
    author: "Edgar Villavicencio",
  })

  const getQuotes = async () => {
    // JS random Lorem
    setQuote(getRandomItem(mockQuotes))

    // API call quotes
    const apiResponse = await fetch(randomQuotesHelpers.apiEndpoint)

    if (apiResponse.status !== 200) {
      setApiQuote({
        text: "incorrect API response, try again",
        author: "Edgar Villavicencio",
      })
      return
    }

    const { quotes } = await apiResponse.json()

    setApiQuote({ text: quotes[0].text, author: quotes[0].author })
  }

  return (
    <LayoutBlock navLinks={navLinks}>
      <SectionBlock title={{ heading: "h1", text: "Random Quote generator" }}>
        <Text>static JS vs API call from https://goquotes.docs.apiary.io/</Text>
      </SectionBlock>
      <SectionBlock
        direction="column"
        title={{
          heading: "h2",
          text: "Random Lorem Ipsum (JS generated)",
        }}
      >
        <Text>"{quote.text}"</Text>
        <Text>{quote.author}</Text>
      </SectionBlock>

      <SectionBlock
        direction="column"
        title={{
          heading: "h2",
          text: "Random Quote (API call)",
        }}
      >
        <Text>"{apiQuote.text}"</Text>
        <Text>{apiQuote.author}</Text>
      </SectionBlock>

      <SectionBlock direction="column">
        <Button callback={getQuotes}>New quote</Button>
        <Link border={false} to="https://www.twitter.com/intent/tweet">
          Tweet quote
        </Link>
      </SectionBlock>
    </LayoutBlock>
  )
}

export default RandomQuotePage
