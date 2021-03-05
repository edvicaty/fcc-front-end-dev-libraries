import React, { useState } from "react"
import { LayoutBlock } from "../blocks"
import { Heading, Button, Text, Wrapper } from "../components"
import { navLinks } from "../helpers/constants"

const items = [
  { id: "zero", text: "0", type: "zero" },
  { id: "one", text: "1", type: "number" },
  { id: "two", text: "2", type: "number" },
  { id: "three", text: "3", type: "number" },
  { id: "four", text: "4", type: "number" },
  { id: "five", text: "5", type: "number" },
  { id: "six", text: "6", type: "number" },
  { id: "seven", text: "7", type: "number" },
  { id: "eight", text: "8", type: "number" },
  { id: "nine", text: "9", type: "number" },
  { id: "add", text: "+", type: "operator" },
  { id: "subtract", text: "-", type: "operator" },
  { id: "multiply", text: "*", type: "operator" },
  { id: "divide", text: "/", type: "operator" },
  { id: "decimal", text: ".", type: "dot" },
]

const CalculatorPage = () => {
  const [display, setDisplay] = useState([])
  const [firstZero, setFirstZero] = useState(true)
  const [firstDecimal, setFirstDecimal] = useState(true)

  const calculateDisplay = () => {
    let result = eval(display.join(""))
    setDisplay([result])
  }

  const checkIfRepeatedDot = value => {
    return value == "." && display[display.length - 1] == "." ? true : false
  }

  const checkIfLastOperator = value => {
    //     refactor could be used here to use 'display' as an array of objects instead of strings
    const operators = ["*", "-", "+", "/"]
    const operatorsForMinus = ["-", "+"]

    if (value !== "-") {
      return operators.includes(display[display.length - 1]) ? true : false
    }
    return operatorsForMinus.includes(display[display.length - 1])
      ? true
      : false
  }

  //     refactor could be implemented in here to move each case to a separate function
  //     Maybe could be a refactor of this using a hashmap of some sort
  const setMath = (value, type) => {
    if (type === "zero") {
      if (firstZero === true && value == 0) {
        return
      }
      setDisplay([...display, value])
      return
    }

    if (type === "dot") {
      if (!firstDecimal) {
        return
      }
      const repeated = checkIfRepeatedDot(value)
      !repeated && setDisplay([...display, value])
      setFirstDecimal(false)
      return
    }

    if (type === "number") {
      setDisplay([...display, value])
      setFirstZero(false)
      return
    }

    if (type === "operator") {
      // logic was changed for it to prevent input of multiple operators it they weren't make sense.
      // * and / operations are allowed to be implemented for negative numbers
      setFirstZero(true)
      setFirstDecimal(true)
      const lastOperator = checkIfLastOperator(value)
      if (!lastOperator) {
        setDisplay([...display, value])
        return
      }

      const temp = [...display]
      temp.splice(temp.length - 1)
      setDisplay([...temp, value])
      return
    }
  }

  return (
    <LayoutBlock navLinks={navLinks}>
      <Heading as="h1">JS Calculator</Heading>
      <Wrapper>
        <Text>{!display.length ? 0 : display.join("")}</Text>
      </Wrapper>

      <Wrapper direction="row">
        {items?.map(item => (
          <Button
            size="small"
            value={item.text}
            callback={e => {
              //  TODO: debug later e.target.value returns undefined
              setMath(e.target.innerText, item.type)
            }}
            id={item.id}
          >
            {item.text}
          </Button>
        ))}
      </Wrapper>

      <Wrapper direction="row">
        <Button
          size="xsmall"
          callback={() => {
            calculateDisplay()
          }}
        >
          =
        </Button>
        <Button
          size="xsmall"
          callback={() => {
            setDisplay([])
            setFirstZero(true)
            setFirstDecimal(true)
          }}
        >
          clear
        </Button>
      </Wrapper>

      <Text>
        NOTE: Logic was changed for preventing input of multiple operators if
        they weren't make sense. * and / operations are allowed to be
        implemented for negative numbers
      </Text>
    </LayoutBlock>
  )
}

export default CalculatorPage
