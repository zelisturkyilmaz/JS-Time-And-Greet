let userName = prompt("What's your name?");

document.getElementById("myName").innerHTML = userName;

function showTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    const weekdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    let day = weekdays[date.getDay()];

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = `${hour} : ${minute} : ${seconds} ${day}`;
    document.getElementById("myClock").innerHTML = time;
}

setInterval(showTime, 1000);