/* 1- Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days. */

  const month = prompt('Enter a month name').toLowerCase();
  switch (month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${month} has 31 days.`);
        break
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${month} has 30 days.`);
        break
    case 'february':
        console.log(`${month} has 28 days.`)
  }

  /* 2- Write a program which tells the number of days in a month, now consider leap year.*/
  //leap year feburary 29 days
  const monthName = prompt('Enter a month name').toLowerCase();
  switch (monthName) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${month} has 31 days.`);
        break
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${month} has 30 days.`);
        break
    case 'february':
        console.log(`Leap year,${month} has 29 days.`)
  }