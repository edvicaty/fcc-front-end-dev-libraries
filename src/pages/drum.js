import React, { useState, useEffect, useRef } from "react"
import { drumHelpers, navLinks } from "../helpers/constants"
import { Button, Text, Heading } from "../components"
import { LayoutBlock, TextBlock } from "../blocks"

const DrumPage = () => {
  const [history, setHistory] = useState([])
  const historyRef = useRef(null)
  const audioRef = useRef(null)
  useEffect(() => {
    audioRef.current = {
      Q: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"),
      W: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"),
      E: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"),
      A: new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      ),
      S: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"),
      D: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"),
      Z: new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      ),
      X: new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      ),
      C: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"),
    }
    window.addEventListener("keydown", e => {
      const key = e.key.toUpperCase()
      if (audioRef.current[key]) {
        playAudio(key)
      }
    })
  }, [])

  function playAudio(key) {
    historyRef.current = historyRef.current
      ? [...historyRef.current, key]
      : [key]
    setHistory(historyRef.current)
    audioRef.current[key].play()
  }

  function clearHistory() {
    historyRef.current = null
    setHistory([])
  }

  return (
    <LayoutBlock navLinks={navLinks}>
      <Heading as="h1">Drum machine</Heading>
      <Button
        callback={() => {
          clearHistory([])
        }}
      >
        Clear history
      </Button>
      <TextBlock direction="column">
        <Text>
          {history.length
            ? history.toString()
            : "Click the buttons or type the corresponding keys"}
        </Text>
      </TextBlock>

      <TextBlock>
        {drumHelpers.keys &&
          drumHelpers.keys.map(key => (
            <Button
              key={key}
              callback={e => {
                playAudio(e.target.innerText)
              }}
            >
              <Text>{key}</Text>
            </Button>
          ))}
      </TextBlock>
    </LayoutBlock>
  )
}

export default DrumPage
