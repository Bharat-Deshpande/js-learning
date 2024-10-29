//stack => primitive
// Heap => Non primitive


let myname = "Bharat" // primitive so goes into stack


let anotherName = myname
anotherName = "Bharat Deshpande"
console.log(myname); // Bharat
console.log((anotherName)); // Bharat Deshpande


let userOne = {
    email: "bharat@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "bharat@goodle"

console.log(userOne.email); // bharat@goodle
console.log(userTwo.email); //bharat@goodle

console.log("bharat");


