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
  { to: "/clock/", text: "Clock" },
  { to: "/calculator/", text: "Calculator" },
  { to: "/drum/", text: "Drum" },
  { to: "/markdown/", text: "Markdown" },
  { to: "/random-quote/", text: "Quotes" },
  { to: "/random-image/", text: "Images" },
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
  keys: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
}

export const lorem =
  "consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation"

export const markdownHelpers = {
  text: `# h1   
## h2
### h3
[link](https://www.freecodecamp.com)
${"```"}
// codeblock
var s = "JavaScript syntax highlighting";
alert(s);
${"```"}
${"`"}inline code${"`"}
- list

> blockquote

image:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

**strong**
`,
}

export const randomQuotesHelpers = {
  apiEndpoint: "https://goquotes-api.herokuapp.com/api/v1/random?count=1",
}

export const imageHelpers = [
  {
    name: "JPG",
    url:
      "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/07/05182149/dogecoin-1.jpg",
  },
  {
    name: "JPG2",
    url:
      "https://ih1.redbubble.net/image.445130528.1102/flat,750x1000,075,f.u2.jpg",
  },
  {
    name: "JPEG",
    url: "https://i.blogs.es/8b4a9d/dogecoin/450_1000.jpeg",
  },
  {
    name: "PNG",
    url: "http://assets.stickpng.com/images/5845e6cffb0b0755fa99d7f1.png",
  },
]
