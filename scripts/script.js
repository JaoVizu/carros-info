// Questao H
var addSix = (value) => {
  return value + 6
}

console.log(addSix(10))
console.log(addSix(21))

// Questao I
function duplicate() {
  const firstArr = [1,2,3,4,5]
  return [...firstArr, ...firstArr]
}

console.log('Duplicated values', duplicate())

// Questao J
function transformStringToObject() {
  const myString = '{"name": "Erick Schimdt", "age": "32", "height": "1.78"}'
  return JSON.parse(myString)
}

console.log('String to Object', transformStringToObject())