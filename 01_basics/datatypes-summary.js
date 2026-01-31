// ****** DataTpes ****** 

// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 23452345647689794n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "nitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);

//***************** DATATYPES RETURN VALUE *********************
// String – string

// Number – number

// Boolean – boolean

// null – object

// undefined – undefined

// Symbol – symbol

// BigInt – bigint

// Array – object

// Object – object

// Function – function


// console.log(typeof score);        // "number"
// console.log(typeof scoreValue);   // "number"
// console.log(typeof isLoggedIn);   // "boolean"
// console.log(typeof outsideTemp);  // "object"
// console.log(typeof id);           // "symbol"
// console.log(typeof heros);        // "object"
// console.log(typeof myObj);        // "object"
// console.log(typeof myFunction);   // "function"
