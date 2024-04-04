// console.log("Welcome to Node JS Version ")
// console.log("Welcome to Exxpress JS 2")
let number1 = 10;
let number2 = 20;
let final = number1 + number2;
console.log(final);

// module.exports = final;
// console.log("Please subscribe to our channel in express js")
// // console.log(window)

// const a = () => {
//     console.log("welocme to arrow functions")
// }
// export default a;
// module.exports = a;

let object = {
    average: (a, b) => {
        console.log("average is " + (a +b) / 2)
    },
    addition: (a,b) => {
        console.log("the addition of A and B is", + (a + b))
    }
}
module.exports = object;



