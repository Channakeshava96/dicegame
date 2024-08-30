var randomNumber1=Math.floor((Math.random()*6)+1);
var rd="dice"+randomNumber1+".png";
var i="images/"+rd;
document.querySelectorAll("img")[0].setAttribute("src",i);
var randomNumber2=Math.floor((Math.random()*6)+1);
var x="dice"+randomNumber2+".png";
var i="images/"+x;
document.querySelectorAll("img")[1].setAttribute("src",i);
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="player 1 wins!🚩";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="player 2 wins!🚩";

}
else{
    document.querySelector("h1").innerHTML="Draw!"
}
