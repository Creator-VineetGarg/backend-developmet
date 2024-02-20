// object
/** 

const user = {
    name : "Vineet",
    title : "Garg",
    age : 19,
    city : "Ballabgarh"
}

// Accessing the data
console.log(user.name)
console.log(user['name'])

// Adding data
user.country = "India"
user['continent'] = 'Asia'
console.log(user)

// Deleting data from object
delete user.country
delete user['continent']
console.log(user)
*/

let person = {
    name : "Vineet",
    age : 19,
    address : {
        city : "Ballabgarh",
        country : "India",
        continent : "Asia"
    }
}

for (let key in person){
    console.log(key, "-->", person[key])
}

console.log(Object.keys(person))
console.log(Object.values(person))
// Get both
console.log(Object.entries(person))


/**
 * Cloning an object using assign
 */
const new_person = Object.assign({}, person)
console.log(new_person)

const smart_person = Object.assign({}, new_person, {role: "Developer"})
console.log(smart_person)