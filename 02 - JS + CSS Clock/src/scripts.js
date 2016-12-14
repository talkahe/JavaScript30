/*jshint esversion: 6 */

function rotateHands(){
    date = new Date();

    secondHand = document.querySelector(".second-hand");
    secondHand.style.transform = `rotate(${(360/60) * date.getSeconds() + 90}deg)`;

    minuteHand = document.querySelector(".minute-hand");
    minuteHand.style.transform = `rotate(${(360/60) * date.getMinutes() + 90}deg)`;

    hourHand = document.querySelector(".hour-hand");
    hourHand.style.transform = `rotate(${(360/12) * (date.getHours() % 12) + 90}deg)`;
}

setInterval(rotateHands,1000);
