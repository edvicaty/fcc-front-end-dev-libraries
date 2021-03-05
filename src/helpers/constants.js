const defaultBreak = 5 * 60
const defaultLength = 25 * 60
const defaultSessionLimit = 60 * 60

export const clockHelpers = {
  defaultBreak,
  defaultLength,
  defaultSessionLimit,
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

export const drumHelpers = {
  audio: {
    Q: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"),
    W: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"),
    E: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"),
    A: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"),
    S: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"),
    D: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"),
    Z: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"),
    X: new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"),
    C: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"),
  },
}
