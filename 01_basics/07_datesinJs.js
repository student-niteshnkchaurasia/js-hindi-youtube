// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatDate = new Date(2026, 0, 31)
// let myCreatDate = new Date(2026, 0, 31, 7, 5)
// let myCreatDate = new Date("2026-02-01")
let myCreatDate = new Date("2026-02-01")
// console.log(myCreatDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the Time `

newDate.toLocaleDateString('default', {
  weekday: "long",
})



