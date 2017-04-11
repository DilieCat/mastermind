//De arrays die we gaan gebruiken in ons script.

var colors = ['red', 'green', 'yellow', 'blue', 'orange', 'purple', 'white', 'pink'];
var choosenColors = [];
var userInput = [];

//Met de randomNumber functie genereren we een random getal van 1 tot 8.

function randomNumber() {
	return colors[Math.round(Math.random() * 7)];
}

//Hier mee word de randomnumber van de randomNumber functie gepakt en een color van gemaakt.

function randomColors() {
	for (i = 0; i < 4; i++){
		choosenColors.push(randomNumber());
	}
	return choosenColors;
}

console.log(randomColors());

//Met de static HTML function maken we statisch de HTML zodat alles via javascript gaat.

function staticHTML() {
	var buttonDiv = document.createElement("div");
    document.body.appendChild(buttonDiv);

	    var idDiv = document.createAttribute("id"); 
	    idDiv.value = "colorBoxDiv";
	    buttonDiv.setAttributeNode(idDiv);

	    for (var i = 0; i < colors.length; i++) {
		    var innerDiv = document.createElement("button");
		    document.getElementById("colorBoxDiv").appendChild(innerDiv);

	       var classDiv = document.createAttribute("class"); 
		   classDiv.value = colors[i];
		   innerDiv.setAttributeNode(classDiv);

	       var classDiv = document.createAttribute("id"); 
		   classDiv.value = colors[i];
		   innerDiv.setAttributeNode(classDiv);

			var buttonId = colors[i];
			var button = document.getElementById(buttonId);

			button.addEventListener("click", function(event) {

				userInput.push(event.target.id);
				if (userInput.length == 4){
					checkColor();
				}
				console.log(userInput);
			});
	    }

}

//Met de checkColor() function comparen we de colors
function checkColor() {
	/*Hier maken we een variable equal aan die we later gaan gebruiken als een counter in de functie, we maken een tempColorcode aan met een copy van userInput, daarmee
	daarin pushen we de gevonden colors*/
	var equal = 0;
	var tempUserInput = userInput.slice();
	var tempChoosenColors = choosenColors.slice();

	//Hier gebeurt het comparen en gaan de kleuren door de if statements heen.
	for (var i = 0; i < userInput.length; i++) {
		if (userInput[i] == choosenColors[i]){
			equal++;
			tempChoosenColors[i] = 'xx';
		}
	}

	//Een if statement voor of de code wel of niet goed is, als de ingevoerde code goed is dan is het spel klaar, zoniet dan kan de gebruiker opnieuw de code invoeren.
	if (equal == 4) {
		console.log("Je hebt gewonnen");
	} else {
		for (var i = 0; i < userInput.length; i++) {
					if (userInput[i] == choosenColors[i]){
						console.log('Goeie positie');
						equal++;
					} else  if (tempChoosenColors.indexOf(userInput[i]) > -1) {
						tempUserInput[i] = 'xx';
						console.log('Staat erin maar op de verkeerde plek');
					} else {
						console.log('Staat er niet in');
					}

		}
		userInput = [];
	}
}


staticHTML();
