//backend logic
// function rollDice(1, 6) {
//   var randomNumber=Math.floor(Math.random() * 6) + 1;
//   console.log(randomNumber);
// }
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// function Odd(num) {
//   if (num % 2 === 0 && num > 0) {
//    return false;
//   } else {
//    return true;
//   }
// }
// debugger;

function Player(name) {
  this.name = name;
  this.turnScore = [];
  this.totalScore = 0;
  // this.true = true;
}
function rollDice(min, max) {
  return Math.ceil(Math.random() * max + min);
}

Player.prototype.addDice = function() {

   var roll = rollDice(0,6);

   if (roll === 0) {  //change to 1
     this.turnScore = 0;
   } else if (roll >= 1) { // change to >1 
     this.turnScore.push(roll);
   } else {

   }
    return this.turnScore
}

  // var roll = rollDice(1,6);
  //
  // if (roll === 1) {
  //   this.turnScore = 0;
  // } else if (roll > 1) {
  //   this.turnScore.push(roll);
  // } else {

  // }

// }

// Player.prototype.addTotal = function(number) {
//   function addScore() {
//     this.turnScore + this.totalScore
//   }
//   roll.addDice();
//   this.true = true;
// }

// Player.prototype.addDiceTotal = function() {
//   this.totalScore + randomNumber

//front end logic
$(document).ready(function() {
  $("#pigDiceForm").submit(function(event) {
    event.preventDefault();
    // console.log(roll);
    // Player.rollDice();
    var newPlayer1Name = $("input#inputtedName1").val();
    var newPlayer2Name = $("input#inputtedName2").val();

    var newPlayer1 = new Player (newPlayer1Name);
    var newPlayer2 = new Player (newPlayer2Name);

    var result = newPlayer1.addDice();


    $(".p1turnscore").append(result);
    // $(".p1totalscore").text(roll.reduce(reducer));
    $(".p2turnscore").append(result);
    $(".p2totalscore").text(result);
  });
});

// $("#result").click(function(){
//   newPlayer.addScore();
// }


// if randomNumber = 1 {
//   turnScore.empty();
//
// }

// Game.getTurnScore
