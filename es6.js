// Review 
// no longer using Var
// variable 
// let 
// const - constant 

// const - functions 
// function countArr(arr) {
  
// }

// const countArr = (arr) => {
//     arr.length
// }

// const countArr = (arr) => arr.length

// () => arr.filter

// person = { 
//   first: "bob", 
//   last: "jones", 
//   age: 23, 
//   email: "bob@email.com"
// }

// person[:first]  person.first
// person[:age]   person.age
// person[:last]
// person[:email]
// obj destructing
// const { first, last, age, email } = person
// const first = person.first
// const last = person.last
// const age = person.age
// const email = person.email

// first

// `${}`

// `
//   hello
//   my 
//   name 
//   is
// `


// const - module, components
// const Account = ({ account, user}) => {
//   const { first, email } = account
//   return (
//     <>
    
//     </>
//   )
// }

// const Account = ({ account, user}) => (
//     <>
//       displaying with no outside logic
//     </>
// )

// export Account // can have many
// import { Account } from './Account'


// export default Acccount // only works once per file
// import Account from './Account'

// export AccountStyles
// export AccountsStyles
// import Account, { AccountStyles, AccountStyles, } from './Account'
// ["vat", "dog", "bird", "lizard",]

// 2 ** 3
//   Math.pow(2, 3)



// const displayColors = (colors = []) => {
//   console.log(colors)
// }

// displayColors(["red", "blue", "pink"])
// displayColors()


// Rest params
//  functions and params
// const displayColors = (color1, ...colors) => {
//   console.log(color1)
// //   console.log(color2)
// //   console.log(color3)
//   for (color of colors) {
//     console.log(color)
//   }
// }

// displayColors("red", "pink", "blue", "green")
// displayColors("red")
// displayColors("red", "green")


// Spread Operator 
// ...
// spreading out obj
// obj and spread out the content
// arr = ["red", "pink", "blue", "green"]
// console.log(...arr)

// state = { name: "adsfasdf", age: 23 }

// <Navbar name={state.name} age={state.age} />
// <Navbar {...state} />



// Promise - asking for something and getting something in return
// ex ask for data from db, db give and error or the data we asked for
// Promise Handling 
// .then - run when you get what you asked for

// .catch - run when you get an error or not what you asked for

// .finally - run regardless of err or if you get what you want

// ask for all the accounts from the db

// .then ( res => {
//   const accounts = res.data
// })

// .catch ( err => {
//   console.log(err)
//   //flash
// })

// .finally(
//   stop the loader
// )







// const - module, components
