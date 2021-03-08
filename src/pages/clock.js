import React, { useState, useRef, useEffect } from "react"
import { LayoutBlock, ClockLengthBlock, SectionBlock } from "../blocks"
import { Text, Heading, Button } from "../components"
import { navLinks, clockHelpers } from "../helpers/constants"
import { formatDate } from "../helpers/functions/clockFunctions"

const ClockPage = () => {
  const [breakLength, setBreakLength] = useState(clockHelpers.defaultBreak)
  const [sessionLength, setSessionLength] = useState(clockHelpers.defaultLength)
  const remainingBreakRef = useRef(clockHelpers.defaultBreak)
  const targetSessionBreakRef = useRef(clockHelpers.defaultBreak)
  const remainingSessionRef = useRef(clockHelpers.defaultLength)
  const targetSessionLengthRef = useRef(clockHelpers.defaultLength)
  const pausedRef = useRef(false)
  const timerRunningRef = useRef(false)
  const timerRef = useRef(null)
  const [displayTimerMessage, setDisplayTimerMessage] = useState(false)
  const alarmAudioRef = useRef(null)
  const clickAudio = useRef(null)

  useEffect(() => {
    alarmAudioRef.current = new Audio(
      "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
    )
    alarmAudioRef.current.volume = 0.1

    clickAudio.current = new Audio(
      "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-46416/zapsplat_technology_computer_mouse_click_apple_003_47279.mp3?_=3"
    )
    clickAudio.current.volume = 0.2
  }, [])

  const manageReset = () => {
    clickAudio.current.play()
    //     timer object
    clearInterval(timerRef.current)
    timerRef.current = null

    //     timer state booleans
    timerRunningRef.current = false
    pausedRef.current = false

    //     state and ref of remaining time
    remainingSessionRef.current = targetSessionLengthRef.current
    setSessionLength(targetSessionLengthRef.current)

    //     breaks
    remainingBreakRef.current = targetSessionBreakRef.current
    setBreakLength(targetSessionBreakRef.current)
  }

  const handleBreakChange = number => {
    //  handle change when modifying break length
    setBreakLength(number)
    targetSessionBreakRef.current = number
    remainingBreakRef.current = number
    manageReset()
  }

  const handleLengthChange = number => {
    //  handle change when modifying Session length
    setSessionLength(number)
    targetSessionLengthRef.current = number
    remainingSessionRef.current = number
    manageReset()
  }

  const runTimerInterval = () => {
    if (!pausedRef.current) {
      //  when timer ends
      if (remainingSessionRef.current === 0) {
        pausedRef.current = true
        clearInterval(timerRef.current)
        timerRunningRef.current = false
        alarmAudioRef.current.play()
      }

      //  when break ends
      if (remainingBreakRef.current === 0 && timerRunningRef.current) {
        remainingBreakRef.current = targetSessionBreakRef.current
        setBreakLength(targetSessionBreakRef.current)
        setDisplayTimerMessage(true)
        alarmAudioRef.current.play()

        setTimeout(() => {
          setDisplayTimerMessage(false)
        }, 5000)
      }

      //  reduce break and timer length
      if (remainingSessionRef.current >= 1) {
        clickAudio.current.play()
        remainingSessionRef.current = remainingSessionRef.current - 1
        setSessionLength(remainingSessionRef.current)

        remainingBreakRef.current = remainingBreakRef.current - 1
        setBreakLength(remainingBreakRef.current)
      }
    }
  }

  const manageClock = () => {
    //  if timer is running, pause mechanic
    if (timerRunningRef.current) {
      pausedRef.current = !pausedRef.current
      return
    }
    timerRunningRef.current = true
    timerRef.current = setInterval(runTimerInterval, 1000)
  }

  return (
    <LayoutBlock navLinks={navLinks}>
      <Heading as="h1">25 + 5 Clock</Heading>
      <ClockLengthBlock
        border
        defaultSessionLimit={clockHelpers.defaultSessionLimit}
        defaultLength={clockHelpers.defaultBreak}
        title={{ heading: "h3", text: "Break Length" }}
        handleChange={handleBreakChange}
      />
      <ClockLengthBlock
        border
        defaultSessionLimit={clockHelpers.defaultSessionLimit}
        defaultLength={clockHelpers.defaultLength}
        title={{ heading: "h3", text: "Session Length" }}
        handleChange={handleLengthChange}
      />

      <SectionBlock title={{ heading: "h2", text: "Session" }}>
        <Text>{formatDate(sessionLength)}</Text>
      </SectionBlock>

      <SectionBlock direction="column" title={{ heading: "h2", text: "Break" }}>
        <Text>{formatDate(breakLength)}</Text>
        <Text>
          {displayTimerMessage ? "A new session has begun" : "Time to break"}
        </Text>
      </SectionBlock>

      <SectionBlock>
        <Button
          callback={() => {
            manageClock()
          }}
        >
          START
        </Button>
        <Button
          callback={() => {
            manageReset()
          }}
        >
          RESET
        </Button>
      </SectionBlock>
    </LayoutBlock>
  )
}

export default ClockPage
