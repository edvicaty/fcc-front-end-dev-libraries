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
