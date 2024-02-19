let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;


console.log(randomNumber1);

let dic1 = document.querySelector(".img1");
let diceNum = "./images/dice"+randomNumber1+".png";
dic1.setAttribute("src", diceNum);

let dic2 = document.querySelector(".img2");
let diceNum2 = "./images/dice"+randomNumber2+".png";
dic2.setAttribute("src", diceNum2);

let heading = document.querySelector('h1');
if(randomNumber1>randomNumber2){
    heading.textContent = "🚩Player 1 Wins!";
}else if(randomNumber1 == randomNumber2){
    heading.innerText = "Draw!";
}else{
    heading.innerText = "Player 2 Wins!🚩";
}