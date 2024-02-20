/**
 * It is a function which is passed as an argument in other function
 * 
 */

function greet(name, callback){
    const greeting = "Hello " + name
    callback(greeting)
}

function displayGreet(message){
    console.log(message)

}

greet("Vineet", displayGreet)

/**
 * Callback hell | Pyramid of doom
 */

getUser(function(user)){
    getPosts(user.id, function(post)){
        displayUserInfoAndPost(user, posts, function(){
            console.log("User info and posts successfully displayed.")
        })
    }
}