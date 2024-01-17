/* 1- Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
Enter base: 20
Enter height: 10
The area of the triangle is 100 */

const base = prompt('Enter the base of triangle','base of triangle');
const height = prompt('Enter the height of triangle','height of triangle');
window.alert('The area of the triangle is ' + 0.5 * base * height);

/* 1- Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12 */

const sideA = Number(prompt("Enter the side a")); //Number for converting string to number
const sideB = Number(prompt("Enter the side b"));
const sideC = Number(prompt("Enter the side c"));
const perimeterOfTri = sideA + sideB + sideC;
window.alert(perimeterOfTri)

/* 1- Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)) */

const width = Number(prompt('Enter the width'));
const length = Number(prompt('Enter the length'));
const area = 2 * Number((length + width));
window.alert('The area of rectangle is ' + area);

/* 2- Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14. */

const radius = Number(prompt('Enter the radius'));
const areaOfCircle = Math.PI * radius * radius;
const circumOfCircle = 2 * Math.PI * radius;
alert(`The radius you entered is ${radius},And the area of cirlce is ${areaOfCircle},and the circumference of a circle is ${circumOfCircle}`);

/* 3- Calculate the slope, x-intercept and y-intercept of y = 2x -2 */

// Calculate the slope, x-intercept and y-intercept of y = 2x - 2

const slope = 2;
const x_intercept = 0 / slope;  
const y_intercept = 2 * 0 - 2;  

console.log("Slope:", slope);
console.log("X-intercept:", x_intercept);
console.log("Y-intercept:", y_intercept);

/* 4- Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10) */

const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;

const slopeTwo = (y2 - y1) / (x2 - x1);
console.log(`The slope between (${x1},${y1}) and (${x2},${y2}) is: ${slope}`);

/* 5- Compare the slope of above two questions. */

console.log(`(${x1},${y1}) and (${x2},${y2}): ${slopeTwo}`);
console.log("Slope 1:", slope);

/* 6- Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0. */

const equation = (x) => x**2 + 6*x + 9;
const yValue = 0;

const solutions = [];
for (let x = -10; x <= 10; x++) {
    if (equation(x) === yValue) {
        solutions.push(x);
    }
}
console.log("Solutions for y = 0 are:", solutions);

/* 7- Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120 */

const hours = prompt('Enter hours','hours');
const ratePerHour = prompt('Enter rate per hour','rateperhour');
const weeklyEarning = hours * ratePerHour;
alert('Your Weekly Earning is ' + weeklyEarning);

/* 8- If the length of your name is greater than 7 say, your name is long else say your name is short. */

const fullname = 'Akashah';
if (fullname.length > 7) {
    console.log('Your name is Long')
} else {
    console.log('Your name is Short')
}

/* 9- Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh */

const firstName = 'Asabeneh';
const familyName = 'Yetayeh';
if (firstName.length > familyName.length) {
    console.log('Your first name, Asabeneh is longer than your family name, Yetayeh')
} else {
    console.log('Your family name, yetayeh is longer than your first name, Asabeneh')
}

/* 10- Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you. */

const myAge = 19;
const yourAge = 17;
if (myAge > yourAge) {
console.log(`I am ${myAge - yourAge} years older than you.`)
} else {
    console.log(`You are ${yourAge - myAge} years older than me.`)
}

/* 11- Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years. */

const birthYear = prompt('Enter your birth year', '2011');
const currentTime = new Date;
const age = Math.abs(birthYear - currentTime.getFullYear());
if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive`)
} else if (age < 18) {
    console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years`);
}

/* 12- Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds. */

const yearsLived = prompt('Enter your age', 'age');
const secondsInDay = 60 * 60 * 24; 
const secondsInYear = secondsInDay * 365;
const secondsLIved = secondsInYear * yearsLived;
alert(`You lived ${secondsLIved} seconds.`)

/* 13- Create a human readable time format using the Date time object
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm */

const time = new Date;
console.log(`${time.getFullYear()}-${time.getMonth() + 1}-${time.getDay()} ${time.getHours()}:${time.getMinutes()}`);

console.log(`${time.getDay()}-${time.getMonth() + 1}-${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`);

console.log(`${time.getDay()}-${time.getMonth() + 1}-${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`);









