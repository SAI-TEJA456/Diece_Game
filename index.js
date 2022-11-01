let randomNumber1 = Math.floor(Math.random()*6 + 1);
let randomNumber2 = Math.floor(Math.random()*6 + 1);

let image1 = "images/dice" + randomNumber1 + ".png";
let image2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".dice .img1").setAttribute("src",image1);
document.querySelector(".dice .img2").setAttribute("src",image2);

let player1 = "Player1 wins";
let player2 = "Player2 wins";
let draw = "Draw";

if (randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = player1;
}
if (randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML = player2;
}
if(randomNumber1 === randomNumber2)
{
  document.querySelector("h1").innerHTML = draw;
}
