const defaultBreak = 5 * 60
const defaultLength = 25 * 60
const defaultSessionLimit = 60 * 60

const breakIds = {
  label: "break-label",
  decrement: "break-decrement",
  increment: "break-increment",
  display: "break-length",
}

const sessionIds = {
  label: "session-label",
  decrement: "session-decrement",
  increment: "session-increment",
  display: "session-length",
}

export const clockHelpers = {
  defaultBreak,
  defaultLength,
  defaultSessionLimit,
  breakIds,
  sessionIds,
}

export const navLinks = [
  { to: "/", text: "Home" },
  { to: "/drum/", text: "Drum" },
  { to: "/markdown/", text: "Markdown" },
  { to: "/random-quote/", text: "Random Quote" },
  { to: "/clock/", text: "Clock" },
  { to: "/calculator/", text: "Calculator" },
]

export const calculatorHelpers = {
  keys: [
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
  ],
}
