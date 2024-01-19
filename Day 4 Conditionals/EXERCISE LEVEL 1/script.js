/* 1- Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.*/

const age = prompt('Enter your age:');
if (age >= 18) {
    console.log('You are old enough to drive')
} else if (age < 18 ) {
    console.log(`Wait for ${18 - age} years to eligible for driving.`)
} else {
    console.log('Wrong type, Type a number eg, 18')
}

/* 2- Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
Enter your age: 30
You are 5 years older than me. */

const myAge = 19;
const yourAge = prompt('Enter your age:');
if (myAge > yourAge) {
    console.log(`I am ${myAge},You are ${myAge - yourAge} years younger than me.`)
} else if (myAge < yourAge) {
    console.log(`I am ${myAge},You are ${yourAge - myAge} years older than me.`)
} else if (myAge == yourAge) {
    console.log(`I am also ${myAge},We both have same age.`)
} else {
    console.log('Type mistake, e.g- 20')
}

/* 3- If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3 */

  const a = 4;
  const b = 3;
  if (a > b) {
    console.log('a is greater than b')
  } else {
    console.log('a is less than b')
  }

   //using ternary operator
const compare = a > b;
compare
? console.log('a is greater than b')
: console.log('a is less than b');

/* 4- Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number. */

const numOne = prompt('Enter a number');
if (numOne / 2) {
    console.log(`${numOne} is an even number`)
} else if (numOne /! 2) {
    console.log(`${numOne} is an odd number`)
} else {
    console.log(`${numOne} is not a number.`)
}