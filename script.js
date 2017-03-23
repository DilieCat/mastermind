var colors = ['red', 'green', 'yellow', 'blue', 'orange', 'purple', 'white', 'pink'];
var choosenColors = [];
var userInput = [];
var result = [];

function randomNumber() {
	return colors[Math.round(Math.random() * 7)];
}

function randomColors() {
	for (i = 0; i < 4; i++){
		choosenColors.push(randomNumber());
	}
	return choosenColors;
}

console.log(randomColors());



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
				compareFase1((event.target.getAttribute("id")));
			});
	    }

}


//Nu begint de 1e fase van het comparen, hier kijken we of de colors goed staan.

function compareFase1(color){
	userInput.push(color);
	
	console.log(userInput);

	if (userInput.length == 4) {
		for (var i = 0; i < choosenColors.length; i++) {
			if (userInput[i] == choosenColors[i]) {
				result.push("goed")
			} else {
				result.push("fout")
			}
		}

		console.log(result);
	}
}



staticHTML();
