function getCurrentDate()
{
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();
    currentDay = ( currentDay < 10 ? "0" : "" ) + currentDay;
    currentMonth = ( currentMonth < 10 ? "0" : "" ) + currentMonth;

    document.getElementById('date').innerHTML = currentDay + "/" + currentMonth + "/" + currentYear;
}

function getCurrentTime()
{
    var currentDay = new Date();
    var currentHour = currentDay.getHours();
    var currentMinute = currentDay.getMinutes();
    var currentSecond = currentDay.getSeconds();
    currentSecond = ( currentSecond < 10 ? "0" : "" ) + currentSecond;
    currentMinute = ( currentMinute < 10 ? "0" : "" ) + currentMinute;
    currentHour = ( currentHour < 10 ? "0" : "" ) + currentHour;

    document.getElementById('time').innerHTML = currentHour + ":" + currentMinute + ":" + currentSecond;
}
setInterval('getCurrentTime();getCurrentDate() ',1000)