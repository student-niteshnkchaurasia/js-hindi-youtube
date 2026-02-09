const user = {
  username: "nitesh",
  price: 999,

  welcomeMessage: function() {
    console.log(`${this.username} , welcome to website`); // this.(this dot) is refers to current context

    console.log(this);
    
  }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// value of this node in which empathy & under the brower in which value is windows

// function chai(){
//   let username = "nitesh"
//   console.log(this);
// }

// chai()

// const chai = function () {
//   let username = "nitesh"
//   console.log(this.username);
// }


// const chai = () => {
//   let username = "nitesh"
//   console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "nitesh"})

console.log(addTwo(3, 4));
