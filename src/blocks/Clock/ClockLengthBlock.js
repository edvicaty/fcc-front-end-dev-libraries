import React, { useState } from "react"
import { formatDate } from "../../helpers/functions/clockFunctions"
import { Button, Text } from "../../components"
import { TextBlock } from "../index"

const ClockLengthBlock = ({
  defaultLength,
  defaultSessionLimit,
  handleChange,
  title,
  border,
}) => {
  const [length, setLength] = useState(defaultLength)

  const handleIncrement = () => {
    if (length < defaultSessionLimit) {
      handleChange(length + 1 * 60)
      setLength(length + 1 * 60)
    }
  }

  const handleDecrement = () => {
    if (length > 1 * 60) {
      handleChange(length - 1 * 60)
      setLength(length - 1 * 60)
    }
  }

  return (
    <TextBlock border={border} title={title}>
      <Button
        callback={() => {
          handleIncrement()
        }}
      >
        UP
      </Button>
      <Text>{formatDate(length)}</Text>
      <Button
        callback={() => {
          handleDecrement()
        }}
      >
        DOWN
      </Button>
    </TextBlock>
  )
}

export default ClockLengthBlock
