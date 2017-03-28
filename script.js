//De arrays die we gaan gebruiken in ons script.

var colors = ['red', 'green', 'yellow', 'blue', 'orange', 'purple', 'white', 'pink'];
var choosenColors = [];
var userInput = [];
var faseCheck = "";

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

				// Met deze if statement word er gecheckt of de gebruiker fase 1 is doorgegaan, fase 2 kan niet betreden worden als fase 1 niet klaar is.
				if (userInput.length == 4) {
					var result = compareFase1();
					faseCheck = true;
				}
				//Hier roepen we de functies aan als er op de colors buttons geklikt word.
				//compareFase1();
				console.log(userInput);
				compareFase2(result);
			});
	    }

}


//Nu begint de 1e fase van het comparen, hier kijken we of de colors goed staan.

function compareFase1(){
	var result = [];
		for (var i = 0; i < choosenColors.length; i++) {
			if (userInput[i] == choosenColors[i]) {
				result.push("goed")
			} else {
				result.push("fout")
			}
		}
	return result;
}

//De 2e fase van het comparen, hier kijken we of een color voorkomt in het de random color code van de computer.

function compareFase2(result) {

	if (faseCheck){
		console.log(userInput);
		console.log(choosenColors);
		var equal = 0;
		for (var a = 0; a < userInput.length; a++){
			if (userInput[a] == choosenColors[a]){
				equal ++;
			}
		}
		if (equal == userInput.length){
			console.log('all equal');
		}
	}
}



staticHTML();
