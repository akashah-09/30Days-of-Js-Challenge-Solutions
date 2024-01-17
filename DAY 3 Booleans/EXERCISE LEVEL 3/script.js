/* 1 and 2- Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 ) 
YYY-MM-DD HH:mm eg. 20120-01-02 07:05 
*/

const currentTime = new Date;
    
console.log(`${currentTime.getFullYear()}-${currentTime.getMonth() + 1}-${currentTime.getDate()} ${currentTime.getHours().toString().padStart(2, "0")}:${currentTime.getMinutes().toString().padStart(2, "0")}`);
