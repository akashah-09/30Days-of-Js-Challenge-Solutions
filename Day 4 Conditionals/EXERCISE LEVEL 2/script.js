/* 1 to 6- Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

const score = prompt('Enter your score');
switch (true) {
    case score >= 80 && score <= 100:
        console.log("Congratulations,You got grade 'A'");
        break
    case score >= 70 && score <= 79:
        console.log("Congratulations,You got grade 'B'");
        break
    case score >= 60 && score <= 69:
        console.log("You got grade 'C'");
        break
    case score >= 50 && score <= 59:
        console.log("Congrats Legend,You got Grade 'D'");
        break
    case score >= 0 && score <= 49:
        console.log("Need Hard work,You got grade 'F'");
        break
    default:
        console.log('type error, Please retry')
};


/* 7 to 11- Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

const season = prompt('Enter the Name of month').toLowerCase();
switch (season) {
    case 'september':
    case 'november':
    case 'october':
        console.log('The season is Autumn');
        break
    case 'january':
    case 'february':
    case 'december':
        console.log('The season is winter');
        break
    case 'march':
    case 'april':
    case 'may':
        console.log('The season is Spring');
        break
    case 'june':
    case 'july':
    case 'august':
        console.log('The season is Summer');
        break
        default:
            console.log('Spell mistake, Plese recheck your spelling')
}

/* 12- Check if a day is weekend day or a working day. Your script will take day as an input.
  What is the day  today? Saturday
  Saturday is a weekend.

  What is the day today? saturDaY
  Saturday is a weekend.

  What is the day today? Friday
  Friday is a working day.

  What is the day today? FrIDAy
  Friday is a working day. */

  const day = prompt('What is the day today').toLowerCase();
  switch (day) {
    case 'saturday':
    case 'sunday':
        console.log(`${day} is a weekend`);
        break
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${day} is a working day`);

  }