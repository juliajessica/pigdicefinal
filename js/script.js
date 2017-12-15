var roll1;
var player1;
var player2;

var rolldice = function() { // Rolling the dice
  return Math.floor(Math.random() * 6) + 1;
}

function Player() {
  // debugger;
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

var clearNames = function() {
  $("#inputtedName1").val("");
  $("#inputtedName2").val("");
}

function resetFields() {
  $("input#inputtedName1").val("");
  $("input#inputtedName2").val("");
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

  $("#p1rollButton").click(function(event) {
    event.preventDefault();
    player1 = new Player();
    player1.roll = rolldice();;
    $(".resultp1turnscore").append(player1.roll + ", ");
    player1.addDice();

  $("#p2rollButton").click(function(event) {
    event.preventDefault();
    player2 = new Player();
    player2.roll = rolldice();
    $(".resultp2turnscore").append(player2.roll + ", ");
    player2.addDice();

  $("p1holdButton").click(function(event) {
    event.preventDefault();
    player1 = new Player();
    $("#p1totalscore").append(player1.roll + this.total);
  }
)

    });
  });
});
