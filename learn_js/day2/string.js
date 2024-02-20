// two ways of defining string
let name= "Vineet"
let title = 'Garg'

console.log(name, title)

// Accessing on the based on index
console.log(name[0])
console.log(title[0])

// Strings are immutable
name[0] = 'd'
console.log(name)

// Methods of the string

// Length of the string
console.log(name.length)

// slicing
len = name.length
console.log(name.slice(5,0))