//backend logic

// function Odd(num) {
//   if (num % 2 === 0 && num > 0) {
//    return false;
//   } else {
//    return true;
//   }
// }
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function Player(name) { /// constructor
  this.name = name;
  this.turnScore = [];
  this.totalScore = 0;
  // this.true = true;
}
function rollDice(min, max) {  ///calculating the dice
  return Math.ceil(Math.random() * max + min);
}

Player.prototype.addDice = function() { ///prototype created for turnscore

   var roll = rollDice(0,6);

   if (roll === 0) {  //change to 1
     this.turnScore = 0;
   } else if (roll >= 1) { // change to >1
     this.turnScore.push(roll);
    //  this.turnScore + this.totalScore.push(roll);
   } else {

   }
    return this.turnScore

    var sum = 0
    for (i=0; i<=this.turnScore.length -1; i++) {
      sum = sum + this.turnScore.length[i]
    }

    this.totalScore = sum
}
///////////////////////////////////
Player.prototype.addTotal = function(number) { //protoype created for total score
  function addScore() {
    this.turnScore + this.totalScore
  }
  roll.addDice();
  this.true = true;
}

// Player.prototype.addDiceTotal = function() {  //proto
//   this.totalScore + randomNumber



//front end logic
$(document).ready(function() {
  $("#pigDiceForm").submit(function(event) {
    event.preventDefault();
    // console.log(roll);
    // Player.rollDice();
    var newPlayer1Name = $("input#inputtedName1").val();
    var newPlayer2Name = $("input#inputtedName2").val();
    var roll = $("#rollButton").val();

    var newPlayer1 = new Player (newPlayer1Name);
    var newPlayer2 = new Player (newPlayer2Name);
    var result = newPlayer1.addDice();
    var rollResult = rollButton


    $(".holdButton").click(function() {
      return sum;
    });
    $(".p1turnscore").append(result);
    $(".p1totalscore").text(this.totalScore);
    $(".p2turnscore").append(result);
    $(".p2totalscore").text(this.totalScore);

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
