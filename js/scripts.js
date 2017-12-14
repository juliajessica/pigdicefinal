//backend logic
var player1 = "";
var player2 = "";


// var roll;
// var roll2;

// var playerCurrent;

// function Odd(num) {
//   if (num % 2 === 0 && num > 0) {
//    return false;
//   } else {
//    return true;
//   }
// }
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function Player(name) { /// constructor
  // debugger;
  this.name = name;
  this.roll = 0;
  this.turnScore = 0;
  this.totalScore = 0;
  // this.playerActive = false;
  // this.true = true;
}

var sumArray = this.turnScore   ////adding rolled number when you click the hold button
var total = 0;
  for(var i in sumArray) { total += SumArray[i]; }

// THIS IS DEALING WITH SWITCHING BETWEEN PLAYERS
// Player.prototype.status = function () {
//   if (roll === 1) {
//     switchPlayer();
//     alert("Sorry " + this.name + ", you rolled a 1 -- your turn is over!")
//     this.turnScore = 0
//   } else if (roll !== 1)  {
//     this.turnScore += (roll)
//   }
// }

 // var switchPlayer = function(){
 //   if(player1.playerActive === true) {
 //     player1.playerActive = false;
 //     player2.playerActive = true;
 //     currentPlayer = player1;
 //   } else {
 //     player2.playerActive === false;
 //   }
 //  }

var rollDice = function() {  //calculating the dice rollDice(min, max)
 return Math.floor6*(Math.random()+ 1);
}

Player.prototype.addDice = function() { ///prototype created for turnscore
  debugger;

   var rollFunction = rollDice();
   /// <-- refer to this to call the dice roll

   if (rollFunction === 1) {  //change to 1
     this.turnScore = 0;
     alert("Sorry, your turn is over");
   } else if (rollFunction > 1) { // change to >1
     this.turnScore = rollFunction;
    //  this.turnScore.push(rollFunction);

   }

  //  Player.prototype.addDice = function() { ///prototype created for turnscore
  //    debugger;
    // var sum = 0
    // for (i=0; i<=this.turnScore.length -1; i++) {
    //   sum = sum + this.turnScore.length[i]
    // }

    // this.totalScore = sum
}
///////////
// Player.prototype.addTotal = function(number) { //protoype created for total score
//   function addScore() {
//     this.turnScore + this.totalScore
//   }
//   // roll.addDice();
  // this.true = true;
// }

var clearNames = function() {
  $("#inputtedName1").val("");
  $("#inputtedName2").val("");
}

function resetFields() {
  $("input#inputtedName1").val("");
  $("input#inputtedName2").val("");
}
// Player.prototype.addDiceTotal = function() {  //proto
//   this.totalScore + randomNumber



////////////////////////////////////////////////////////front end logic
$(document).ready(function() {
  // $("#pigDiceForm").submit(function(event) {
    // event.preventDefault();
    // console.log(roll);
    // Player.rollDice();
    // var newPlayer1Name = $("input#inputtedName1").val();
    // var newPlayer2Name = $("input#inputtedName2").val();
    // var roll = $("#rollButton").val();
    // var hold = $("#holdButton").val();

    // var player1 = new Player (newPlayer1Name);
    // var player2 = new Player (newPlayer2Name);
    ///// Need to add to below-- player1.activeStatus = true;
    ////var result1 = player1.addDice();
    ////var result2 = player2.addDice();

    ///var holdResult = holdButton

    // $("#outputname1").text(newPlayer1Name);
    // $("#outputname2").text(newPlayer2Name);
    ///$(".resultp1turnscore").append(result1 + ", ");
    ////$(".resultp1totalscore").text(sumArray);
    ////$(".resultp2turnscore").append(result2 + ", ");
    ////$(".resultp2totalscore").text(total);




  // $("#rollButton").click(function(event) {
  //   player1.turnScore = rollDice();
  // $(".resultp1turnscore").append(result1 + ", ");



  // });


  $("#letsPlay").click(function(event) {
    event.preventDefault();

  var newPlayer1Name = $("input#inputtedName1").val();
  var newPlayer2Name = $("input#inputtedName2").val();
  var player1 = new Player(newPlayer1Name);
  var player2 = new Player(newPlayer2Name);
    $("#outputname1").text(newPlayer1Name);
    $("#outputname2").text(newPlayer2Name);
      resetFields();
    }); //closes lets play button

  $("#rollButton").click(function(event) {
    event.preventDefault();
    // debugger;
    var player1 = new Player();
    var player2 = new Player();
    // var result1 = player1.addDice();
    // var result2 = player2.addDice();

    player1.turnScore = rollDice();
    $(".resultp1turnscore").append(player1.turnScore + ", ");
    player1.addDice();
    player2.turnScore = rollDice();
    $(".resultp2turnscore").append(player2.turnScore + ", ");
    player2.addDice();

  });

  $("#holdButton").click(function(event) {
    event.preventDefault();



  }); //closes hold  button


});
