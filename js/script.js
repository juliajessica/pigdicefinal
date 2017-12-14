var roll1;
var player1;
var player2;

var rolldice = function() { // Rolling the dice
  return Math.floor(Math.random() * 6) + 1;
}

function Player() {
  debugger;
  this.roll = 0;
  this.turn = 0;
  this.total = 0;
}


Player.prototype.addDice = function() {
  if (this.roll === 1) {
    this.turn = 0;
    alert("Sorry, your turn is over");
  } else {
    this.turn += this.roll;
  }

}


//frontend
$(document).ready(function(){


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
    player1 = new Player();
    player2 = new Player();


    player1.roll = rolldice();;
    $(".resultp1turnscore").append(player1.roll + ", ");
    player1.addDice();
    player2.roll = rolldice();
    $(".resultp2turnscore").append(player2.roll + ", ");
    player2.addDice();

});
});
