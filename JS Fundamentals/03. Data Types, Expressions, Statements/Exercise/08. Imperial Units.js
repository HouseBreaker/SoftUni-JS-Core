function convertToImperialUnits(inputInches) {
	let feet = Math.floor(inputInches / 12);
	let inches = inputInches % 12;

	console.log(`${feet}'-${inches}"`)
}

convertToImperialUnits(36);
convertToImperialUnits(55);
convertToImperialUnits(11);
