console.log('I am Connected')

// Demo - 1
/*
// Declare - This does nothing
function funExp1() {
    console.log(Date());
}

// Invoke - This uses the function
funExp1();

// // Example of function doing something 
// function funExp2() {
//     let tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     console.log(tomorrow);
// }
// funExp2();
*/

// Demo - 2
/*
function funExp3(arg1, arg2) {
    console.log(arg1 * arg2);
}
funExp3(5, 10);
*/

// Demo - 3
/*
let varExp2 = 10;
function funExp5() {
    let varExp3 = 100;
    console.log(varExp2 * varExp3);
}
funExp5();
console.log(varExp2);
console.log(varExp3);
*/

// Demo - 4
/*
arrowExp1 = () => {
    return Date();
};
console.log(arrowExp1());

// // Example 2 - Arguments

//  arrowExp2 = (arg1, arg2) => {
//   return arg1 * arg2;
//  };
//  console.log(arrowExp2(5, 10));

// // Example 3 - Show the different shape of arrow functions

//  arrowExp3 = (arg1, arg2) => (
//     arg1 * arg2;
//     );
//  console.log(arrowExp3(5, 10));

//  arrowExp4 = (arg1, arg2) => arg1 * arg2;
//  console.log(arrowExp4(5, 10));

//  let varExp7 = (arrowExp4 = (arg1, arg2) => arg1 * arg2);
//  console.log(varExp7(2, 5));
*/

// Demo - 5
/*
// Comparison Operators
console.log(10 < 5);
console.log(10 > 5);
console.log(10 <= 5);
console.log(10 >= 5);

// Equality Opertors
console.log(10 == '10');
console.log(10 != '10');
console.log(10 === '10');
console.log(10 !== '10');

// Boolean Logic
// IF example
let age = 34;

if (age <= 34) {
	console.log('True in the if statement');
}
*/

// Demo - 6
/*
// Logical Operators
// && || !

if (1 === 1 || 2 === 3) {
    console.log('this has worked');
} else {
    console.log('this has NOT worked');
}


// truthy or falsy
// falsy = false, 0, -0, '', null, undefined, NaN

let var1 = 0

if (var1) {
	console.log('this has worked');
} else {
	console.log('this has NOT worked');
}


// ternary Operator

const varTernary = false
console.log(varTernary ? 'This is the true result' : 'This is the false result');
*/