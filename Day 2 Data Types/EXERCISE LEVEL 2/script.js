/* 1- Using console.log() print out the following statement:

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. */

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

/* 2- Using console.log() print out the following quote by Mother Teresa:

"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead." */

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

/* 3- Check if typeof '10' is exactly equal to 10. If not make it exactly equal. */

console.log(typeof '10' === typeof 10); //false, it's not equal b/c one is string and other is number

const strNum = '10';
const convertToNum = Number(strNum);
console.log(typeof convertToNum === typeof 10);


/* 4- Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10. */

console.log(parseFloat('9.8') === 10); // 9.8 is not equal to 10

const floatNum = parseFloat('9.8'); // output 9.8
const roundUp = Math.ceil(floatNum); // Math.ceil round up to the nearest integer
console.log(roundUp === 10);

/* 5- Check if 'on' is found in both python and jargon */

const wordOne = 'python';
const wordTwo = 'Jargon';
console.log(wordOne.includes('on')); //true
console.log(wordTwo.includes('on')); //true

/* 6- I hope this course is not full of jargon. Check if jargon is in the sentence. */

const sentence = 'I hope this course is not full of jargon';
console.log(sentence.includes('jargon')); //true

/* 7- Generate a random number between 0 and 100 inclusively. */

const ranNumOne = Math.round(Math.random() * 100); //Math.round for removing floating point numbers
console.log(ranNumOne);

/* 8- Generate a random number between 50 and 100 inclusively. */

const ranNumTwo = Math.round(Math.random() * 50 + 50);
console.log(ranNumTwo);

/* 9- Generate a random number between 0 and 255 inclusively. */

const ranNumThree = Math.round(Math.random() * 255);
console.log(ranNumThree);

/* 10- Access the 'JavaScript' string characters using a random number. */

const language = 'JavaScript';
const lanLen = Math.floor(Math.random() * language.length);
const lanChar = language.charAt(lanLen);
console.log(lanChar);

/* 11- Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\t\n3\t1\t3\t9\t27\n5\t5\t1\t25\t125');

/* 12- Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction' */

const sentenceTwo = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentenceTwo.substring(31,54));










