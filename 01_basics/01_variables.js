const accountId = 144553
let accountEmail = "nitesh@goole.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

//accountId = 2 // note allowed

accountEmail = "nk@sd.com"
accountPassword = "454354"
accountCity = "Bengluru"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

