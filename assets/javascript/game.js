var matchNumber = 0;
var totalWins = 0;
var totalLoses = 0;
var scoreCounter = 0;
var crystal = [0, 0, 0, 0];  //stores the random crystal numbers
var q = 1;  //stores the game number in console



// start new game and reset display and assign all random numbers
function gameSetUp() {
	console.log("Game #" + q);

	scoreCounter = 0;
	matchNumber = randomNumber(19,120);  //creates a random number to match using randomNumber function
	console.log("Number to match is: " + matchNumber);

	for (var i = 0; i < crystal.length; i++) {  //loops to create random numbers within the crytal array
		crystal[i] = randomNumber(1, 12);
		console.log("crystal" + i + " = " + crystal[i]);
	}

	//function that creates a random number using the min and max numbers
	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};


	$("#scoreCounter").html("0");
	$("#matchNumber").html("Number to Match: " + matchNumber);	
	
	console.log("----------------------------------");  //seperates the different games played in console

	q++;  //updates the number of games played in console.
};



gameSetUp();



$(document).ready(function() {
	$(".crystal").on("click", function() {

		var crystalId = $(this).attr("id");   //gets the id of the crystal image selected
		

		for (var j = 0; j < crystal.length; j++) {
			if (crystalId == [j]) {  //if the selected crystal image id == loop [j] then...
				scoreCounter = scoreCounter + crystal[j];  //adds the existing scoreCounter value with the crystal array random number
				$("#scoreCounter").html(scoreCounter);  //updates the html with new value
			}
		};

		//determines if a player wins or losses
		if (scoreCounter == matchNumber) {
			alert("you win");
			totalWins++;
			gameSetUp();
			$(".winCount").html(totalWins);
		}
		if (scoreCounter > matchNumber) {
			alert("you Lose");
			totalLoses++;
			gameSetUp();
			$(".lossCount").html(totalLoses);
		}


	})  // on click function

	$(".crystal").hover(function() {
		$(this).css("background-color", "yellow",);
	}, function() {
		$(this).css("background-color", "");
	});  //hover function

});  // document ready function