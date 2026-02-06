// singleton
// object.create

//object literals

const mySym = Symbol("key1")

const jsUser = {
  name: "Nitesh",
  "full name": "Nitesh Chaurasia",
  [mySym]: "mykey1",
  age: 18,
  location: "jaipur",
  email: "nitesh@gamil.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturaday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email = "nitesh@gamil.com"
Object.freeze(jsUser)
jsUser.email = "nites@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
  console.log("Hello Js User");
}
 
jsUser.greetingTwo = function(){
  console.log(`Hello Js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo);



