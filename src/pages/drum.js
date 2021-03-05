import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"

const DrumPage = () => {
  const [history, setHistory] = useState([])
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
        setHistory([...history, key])
        playAudio(key)
      }
    })
  }, [])

  function playAudio(key) {
    audioRef.current[key].play()
  }

  const handleAudioClick = e => {
    setHistory([...history, e.target.innerText])
    playAudio(e.target.innerText)
  }

  return (
    <div id="drum-machine">
      <h1>Click the buttons or the corresponding keys</h1>
      <button
        onClick={() => {
          setHistory([])
        }}
      >
        Clear history
      </button>
      <div id="display">{history.toString()}</div>

      <button
        id="drumQ"
        onClick={e => {
          handleAudioClick(e)
        }}
        className="drum-pad"
      >
        Q
      </button>
      <button
        id="drumW"
        onClick={e => {
          handleAudioClick(e)
        }}
        className="drum-pad"
      >
        W
      </button>
      <button
        id="drumE"
        onClick={e => {
          handleAudioClick(e)
        }}
        className="drum-pad"
      >
        E
      </button>
      <button
        id="drumA"
        onClick={e => {
          handleAudioClick(e)
        }}
        className="drum-pad"
      >
        A
      </button>
      <button
        id="drumS"
        onClick={e => {
          handleAudioClick(e)
        }}
        className="drum-pad"
      >
        S
      </button>
      <button
        id="drumD"
        onClick={e => {
          handleAudioClick(e)
        }}
        className="drum-pad"
      >
        D
      </button>
      <button
        id="drumD"
        onClick={e => {
          handleAudioClick(e)
        }}
        className="drum-pad"
      >
        Z
      </button>
      <button
        id="drumX"
        onClick={e => {
          handleAudioClick(e)
        }}
        className="drum-pad"
      >
        X
      </button>
      <button
        id="drumC"
        onClick={e => {
          handleAudioClick(e)
        }}
        className="drum-pad"
      >
        C
      </button>
    </div>
  )
}

export default DrumPage
