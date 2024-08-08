// Get started!

const name = prompt("What's your name?")
console.log(`Welcome!, ${name}`)

let character = prompt("What type of chracter would you want?(Boy or Girl?)")
let power = prompt("What type of magical powers would you want?(Voodoo,Spirit of animals,Healer?)")

console.log(`Your all set ${name}!, you are a ${character} character with the magical powers of ${power}`)

let difficulty = prompt("What difficulty would you want for your gameplay?  (Easy, Medium,Hard?)")
console.log(`Okay you will now play at a ${difficulty} so good luck!`)

let level = prompt("You can skip levels so what level do you want to start at?")

level = parseInt(level)
console.log(typeof level)

console.log(`Goodluck ${name}!`)

