// Take the Shortcut
// Given a starting value assigned to the happyNum variable, use at least three of the following operators to reassign the value in happyNum until it is equal to 5:

/*  +=
    -=
    *=
    /=
    ++
*/

let happyNum = 1000;
// YOUR CODE BELOW
let a = 5
let b = (a *= 199.5)
let c = (happyNum -= b)

// Do not change the code below
module.exports = { happyNum };
console.log(happyNum += c)
