const accountID = 144553 //const cannot be changed
let accountEmail = "Bharat@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountID = 2 // gives error, not allowed



accountEmail = "hc@hc.com"
accountPassword = "121212"
accountCity = "Bengaluru"

// prefer not to use var bcz of issue in block scope and functional scope

console.log(accountID)
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])