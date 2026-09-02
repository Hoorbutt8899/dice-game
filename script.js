var randomNum1 = Math.random() * 6;
randomNum1 = Math.floor(randomNum1) + 1;

var randomDiceImage = "dice" + randomNum1 + ".png";
var randomDiceSource = "images/" + randomDiceImage;

var img6 = document.querySelectorAll("img")[0];
img6.setAttribute("src" , randomDiceSource);

var randomNum2 = Math.random() * 6;
randomNum2 = Math.floor(randomNum2) + 1;
var randomDiceImage2 = "dice" + randomNum2 + ".png";
var randomDiceSource2 = "images/" + randomDiceImage2;

var dice6 = document.querySelectorAll("img")[1];
dice6.setAttribute("src" , randomDiceSource2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = " 🚩Player 1 Wins!";
} else if (randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML = " 🚩Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = " 🚩It's a Draw!";
}