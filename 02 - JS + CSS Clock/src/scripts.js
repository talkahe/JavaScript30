/*jshint esversion: 6 */

function rotateHands(){
    date = new Date();

    secondHand = document.querySelector(".second-hand");
    secondHand.style.transform = `rotate(${(360/60)*date.getSeconds()}deg)`;

    minuteHand = document.querySelector(".minute-hand");
    minuteHand.style.transform = `rotate(${((360/60)/60)*date.getMinutes()}deg)`;

    // Hay que pasarlo a formato 12h
    hourHand = document.querySelector(".hour-hand");
    console.log(date.getHours());
    hourHand.style.transform = `rotate(${(((360/60)/60)/24)*date.getHours()}deg)`;
}

var t=setInterval(rotateHands,1000);
