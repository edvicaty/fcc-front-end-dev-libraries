import * as React from "react"
import { Link } from "gatsby"

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

const getRandomIndex = array => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return randomIndex
}

const generateRandomArray = (array, length) => {
  const randomArr = []
  for (i = 0; i < length; i++) {
    const index = getRandomIndex(array)
    randomArr.push(array[index])
  }
  return randomArr
}

const getRandomItem = array => {
  const index = getRandomIndex(array)
  const randomItem = array[index]
  return randomItem
}

const CalculatorPage = () => (
  <div>
    <p>Calculator goes here</p>
  </div>
)

export default CalculatorPage
