import * as React from "react"
import { Link } from "gatsby"

const DrumPage = () => {
  const [history, setHistory] = React.useState([])

  const playAudio = key => {
    document.getElementById(key).play()
  }

  window.onkeydown = e => {
    setHistory([...history, e.key.toUpperCase()])
    playAudio(e.key.toUpperCase())
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
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          id="Q"
          className="clip"
        />
        Q
      </button>
      <button
        id="drumW"
        onClick={e => {
          handleAudioClick(e)
        }}
        className="drum-pad"
      >
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          id="W"
          className="clip"
        />
        W
      </button>
      <button
        id="drumE"
        onClick={e => {
          handleAudioClick(e)
        }}
        className="drum-pad"
      >
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          id="E"
          className="clip"
        />
        E
      </button>
      <button
        id="drumA"
        onClick={e => {
          handleAudioClick(e)
        }}
        className="drum-pad"
      >
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          id="A"
          className="clip"
        />
        A
      </button>
      <button
        id="drumS"
        onClick={e => {
          handleAudioClick(e)
        }}
        className="drum-pad"
      >
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          id="S"
          className="clip"
        />
        S
      </button>
      <button
        id="drumD"
        onClick={e => {
          handleAudioClick(e)
        }}
        className="drum-pad"
      >
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          id="D"
          className="clip"
        />
        D
      </button>
      <button
        id="drumD"
        onClick={e => {
          handleAudioClick(e)
        }}
        className="drum-pad"
      >
        <audio
          id="drumZ"
          src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          id="Z"
          className="clip"
        />
        Z
      </button>
      <button
        id="drumX"
        onClick={e => {
          handleAudioClick(e)
        }}
        className="drum-pad"
      >
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          id="X"
          className="clip"
        />
        X
      </button>
      <button
        id="drumC"
        onClick={e => {
          handleAudioClick(e)
        }}
        className="drum-pad"
      >
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          id="C"
          className="clip"
        />
        C
      </button>
    </div>
  )
}

export default DrumPage
