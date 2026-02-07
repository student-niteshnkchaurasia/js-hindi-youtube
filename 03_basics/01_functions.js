// function syntax

// function sayMyName(){ 
//   console.log("N");
//   console.log("I");
//   console.log("T");
//   console.log("E");
//   console.log("S");
//   console.log("H");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){ // parameters

//   console.log(number1 + number2);
// }

// addTwoNumbers(2+ 3) // arguments

function addTwoNumbers(number1, number2){ // parameters

  // let result = number1 + number2
  // return result

  return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: " , result);

function loginUserMessage(username = "sam"){
  //  if(username === undefined)  // { niche ka if(!username same output dega tarika alag ha short me exclamation ke sathe write karne par undefined )

  if(!username){
    console.log("Please enter a username");
    return
    
   }
  return `${username} just logged in`
}

// console.log(loginUserMessage("nitesh"))
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
 return num1
}
 console.log(calculateCartPrice(200, 400, 500, 2000));

 const user = {
  username: "nitesh",
  price: 199
 }

 function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  
 }

//  handleObject(user)
handleObject({
  username: "sam",
  price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

console.log(returnSecondValue([200, 400, 500, 1000]));
