import React, { useState } from "react"
import { LayoutBlock, TextBlock } from "../blocks"
import { Heading, Button, Text } from "../components"
import { navLinks, calculatorHelpers } from "../helpers/constants"

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
    const operators = ["*", "-", "+", "/"]
    const operatorsForMinus = ["-", "+"]

    if (value !== "-") {
      return operators.includes(display[display.length - 1]) ? true : false
    }
    return operatorsForMinus.includes(display[display.length - 1])
  }

  const setMath = (value, type) => {
    const mathFunctions = {
      zero: () => {
        if (firstZero === true && value == 0) {
          return
        }
        setDisplay([...display, value])
      },
      dot: () => {
        if (!firstDecimal) {
          return
        }
        const repeated = checkIfRepeatedDot(value)
        !repeated && setDisplay([...display, value])
        setFirstDecimal(false)
      },
      number: () => {
        setDisplay([...display, value])
        setFirstZero(false)
      },
      operator: () => {
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
      },
    }
    mathFunctions[type]()
  }

  return (
    <LayoutBlock navLinks={navLinks}>
      <TextBlock title={{ heading: "h1", text: "JS Calculator" }}>
        <Text>{!display.length ? 0 : display.join("")}</Text>
      </TextBlock>

      <TextBlock direction="row">
        {calculatorHelpers.keys.map(item => (
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
      </TextBlock>

      <TextBlock direction="row">
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
      </TextBlock>

      <Text>
        NOTE: Logic was changed for preventing input of multiple operators if
        they weren't make sense. * and / operations are allowed to be
        implemented for negative numbers
      </Text>
    </LayoutBlock>
  )
}

export default CalculatorPage
