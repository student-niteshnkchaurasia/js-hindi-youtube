// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
  email: "some@gamil.com",
  fullname: {
    userfullname: {
      firstname: "nitesh",
      lastname: "chaurasia"
    }
  }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "n@gamil.com"
  },
  {
    id: 1,
    email: "n@gamil.com"
  },
  {
    id: 1,
    email: "n@gamil.com"
  },
  {
    id: 1,
    email: "n@gamil.com"
  },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "nitesh"
}

// course.courseInstructor

// const {courseInstructor} = course // there wo are destructer for doing small instructor like {courseInstructor of change any name like instructor and other name} 

const {courseInstructor: instructor} = course // this is destructor // if any time showing small bracket in curlly brackets in any thing given we are understand there is destructoring

//example: const navbar = ({company}) => {
  // }

  // navbar(company = "nitesh") // line 72, 73, 75 this is reactjs showing commonly

// console.log(courseInstructor);

console.log(instructor);  

// how to looking api in objects form 

// {
//   "name": "nitesh",
//   "course": "js in hindi",
//   "price": "free"
// }

// how to looking api in arrays format

// [
//   {},
//   {},
//   {},
// ]