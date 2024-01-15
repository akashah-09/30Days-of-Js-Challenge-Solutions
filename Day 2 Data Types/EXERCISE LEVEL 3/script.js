/* 1- 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence. */

const sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(sentence.match(/love/gi));

/* 2- Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction' */

const sentenceTwo = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentenceTwo.match(/because/gi));

/* 3- Clean the following text and find the most frequent word (hint, use replace and regular expressions). */

const sentenceThree = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let removeDirt = sentenceThree.replace(/%/gi, '');
removeDirt = removeDirt.replace(/\$/gi, '');
removeDirt = removeDirt.replace(/\@/gi, '');
removeDirt = removeDirt.replace(/\&/gi, '');
removeDirt = removeDirt.replace(/\#/gi, '');
removeDirt = removeDirt.replace(/\;/gi, '');
removeDirt = removeDirt.replace(/\?/gi, '');
console.log(removeDirt);

/* 4- Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' */

const salaryPerMonth = 5000;
const annualBonus = 10000;
const onlineCoursesperMonth = 15000;

console.log(salaryPerMonth * 12 + annualBonus + onlineCoursesperMonth * 12); //250000