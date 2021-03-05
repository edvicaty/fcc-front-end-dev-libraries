export const getRandomIndex = array => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return randomIndex
}

export const generateRandomArray = (array, length) => {
  const randomArr = []
  for (let i = 0; i < length; i++) {
    const index = getRandomIndex(array)
    randomArr.push(array[index])
  }
  return randomArr
}

export const getRandomItem = array => {
  const index = getRandomIndex(array)
  const randomItem = array[index]
  return randomItem
}
