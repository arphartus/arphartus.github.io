let pickrAugments = {
	//add pickr close button
	addCloseButton: function(pickr){
		let closeButton = document.createElement("SPAN");
		closeButton.appendChild(document.createTextNode("\u00d7"));
		closeButton.classList.add("pcr-close-button");
		closeButton.addEventListener('click', () => pickr.hide());
		document.getElementsByClassName('pcr-app')[0].appendChild(closeButton);
	},

	addRandomColorButton: function(pickr){
		//Add random color button
		let randomButton = document.createElement("DIV");
		randomButton.appendChild(document.createTextNode("Random Colour"));
		randomButton.classList.add("pcr-random-button");
		randomButton.addEventListener('click', () => randomColor());

		let randomDiv = document.createElement("DIV");
		randomDiv.classList.add("pcr-random-div");
		randomDiv.appendChild(randomButton);
		document.getElementsByClassName('pcr-app')[0].appendChild(randomDiv);

		function randomColor(){
			let colorBox = document.getElementsByClassName('pcr-result')[0];

			let red = Math.floor(Math.random() * 256);
			let green = Math.floor(Math.random() * 256);
			let blue = Math.floor(Math.random() * 256);
			let output = "";

			switch(pickr._representation){
				case "RGBA":
					output = "rgb(" + red.toString() + ", " + green.toString() + ", " + blue.toString() +')';
					break;
				case "HEXA":
					output = '#' + red.toString(16) + green.toString(16) + blue.toString(16);
					break;
			};

			colorBox.value = output;
			colorBox.dispatchEvent(new Event('input'));
			randomButton.style.background = output;
		};
	},
}