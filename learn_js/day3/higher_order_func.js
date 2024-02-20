// // 1st order function --> parameter/primitive/object
// // Higher order function --> A function that takes a functiona as an argumernt and return that function

// const radius= [1,2,3,4]

// function calculateArea(radius){
//     const output = []
//     for(let i = 0; i<radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i])

//     }
//     console.log(output)
// }

// function calculateCir(radius){
//     const output = []
//     for(let i = 0; i<radius.length; i++){
//         output.push(2 * Math.PI * radius[i])
//     }
//     console.log(output)
// }
// calculateArea(radius)
// calculateCir(radius)


const radius = [1,2,3,4]

function area(radius){
    return Math.PI * radius * radius
}

function circumference(radius){
    return 2*Math.PI *radius
}

console.log(radius.map(area))
console.log(radius.map(circumference))


// this is a also can be done my a map() function
/*
function result(radius, logic){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log(result(radius, area))
console.log(result(radius, circumference))
*/


players = ["Sachin", "Virat", "Dhoni", "Rohit"]

players.forEach(player => {
    console.log(player)
});

// Map Function
/**
 * Map -> Creation of new transformed array
 */

arr = [1,2,3,4]
// function add1(arr){
//     return arr+1
// }
// add = arr.map(add1)
add = arr.map(add => add+1)
console.log(add)

/**
 * Filter */

let array = [1,2,3,4,5,6,7,8]

console.log(array.filter((num) => num%2==0))

/**
 * Reduce
 */

console.log([1,2,3,4,5,6,7,8,9,10].reduce((curr, next) => curr+next))
