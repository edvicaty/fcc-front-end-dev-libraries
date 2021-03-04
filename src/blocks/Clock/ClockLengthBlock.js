import React, { useState } from "react"
import { formatDate } from "../../helpers/functions/clockFunctions"
import { Button } from "../../components"
import { CardBlock } from "../index"

const ClockLengthBlock = ({
  defaultLength,
  defaultSessionLimit,
  handleChange,
  title,
  ids,
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
    <CardBlock border={border} title={title}>
      <Button
        id={ids.increment}
        callback={() => {
          handleIncrement()
        }}
      >
        UP
      </Button>
      <div id={ids.display}>{formatDate(length)}</div>
      <Button
        id={ids.decrement}
        callback={() => {
          handleDecrement()
        }}
      >
        DOWN
      </Button>
    </CardBlock>
  )
}

export default ClockLengthBlock
