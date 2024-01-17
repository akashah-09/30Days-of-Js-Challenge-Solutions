/* 1- Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types. */

const firstName = 'Aka';
const lastName = 'Shah';
const country = 'Pakistan';
const age = 19;
const isMarried = 'Divorced';

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof age);
console.log(typeof isMarried);

/* 2- Check if type of '10' is equal to 10 */

console.log(typeof '10' === 10) //false, number and strings are not equal

/* 3- Check if parseInt('9.8') is equal to 10 */

console.log(parseInt('9.8') === 10); //false

/* 4- Boolean value is either true or false. */

const boolOne = 2 < 2;
const boolTwo = 2 > 2;
console.log(boolOne,boolTwo); //Yes boolean value is either true or false.

/* 5- Write three JavaScript statement which provide truthy value. */

const truthyOne = 1 <= 1;
const truthyTwo = 2 > 1;
const truthyThree = 5 >! 6;
console.log(truthyOne,truthyTwo,truthyThree);

/* 6- Write three JavaScript statement which provide falsy value. */

const falsyOne = 2 < 1;
const falsyTwo = 4 == 6;
const falsyThree = 1 <! 3;
console.log(falsyOne,falsyTwo,falsyThree);

/* 7 to 18- Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log() */

console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != '4'); //false
console.log(4 == '4'); //true
console.log(4 === '4') //false

/* 19- Find the length of python and jargon and make a falsy comparison statement. */

const wordOne = 'python';
const wordTwo = 'jargon';
console.log(wordOne ==! wordTwo);

/* 20 to 30- Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log() */

console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!(false)); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true

/* 31- There is no 'on' in both dragon and python */

const animalOne = 'dragon';
const animalTwo = 'python';
if (animalOne.includes('on') && animalTwo.includes('on')) {
    console.log('false,on is include in both dragon and python')
} else if (animalOne.includes('on') || animalTwo.includes('on')) {
    console.log('false,there is on in one word')
} else  {
    console.log('true,there is no on in both dragon and python')
};

/* 32 to 39- Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now. */

//Year Today
const time = new Date;
const currentYear = time.getFullYear();
console.log(currentYear);

//Month today as a number
const currentMonth = time.getMonth() + 1;
console.log(currentMonth);

//Date today
const currentDate = time.getDate();
console.log(currentDate);

//Day today as a number
const currentDay = time.getDay();
console.log(currentDay);

//Hours now
const currentHour = time.getHours();
console.log(currentHour);

//Minute now
const currentMinutes = time.getMinutes();
console.log(currentMinutes);

//Number of minute elapsed from january 1,1970 to now

const nowInMilliseconds = Date.now();
const minutesElapsed = nowInMilliseconds / 60000;
console.log(`Number of minutes elapsed from January 1, 1970, to now: ${minutesElapsed}`);