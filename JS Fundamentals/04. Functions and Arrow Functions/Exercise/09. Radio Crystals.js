function solve(args) {
	let desiredThickness = args[0];

	let crystals = args.slice(1);

	let process = {
		cut: (thickness) => thickness / 4,
		lap: (thickness) => thickness * 0.8,
		grind: (thickness) => thickness - 20,
		etch: (thickness) => thickness - 2,
		xray: (thickness) => thickness + 1,
		transport: (thickness) => Math.floor(thickness),
	};

	function processCrystal(operation, currentThickness, desiredThickness) {
		let operationCount = 0;

		while (process[operation](currentThickness) >= desiredThickness) {
			currentThickness = process[operation](currentThickness);
			operationCount++;
		}

		function capitalize(str) {
			return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
		}

		if (operationCount > 0) {
			console.log(`${capitalize(operation)} x${operationCount}`);

			currentThickness = process.transport(currentThickness);
			console.log('Transporting and washing');
		}

		return currentThickness;
	}

	for (let thickness of crystals) {
		console.log(`Processing chunk ${thickness} microns`);

		thickness = processCrystal('cut', thickness, desiredThickness);
		thickness = processCrystal('lap', thickness, desiredThickness);
		thickness = processCrystal('grind', thickness, desiredThickness);
		thickness = processCrystal('etch', thickness, desiredThickness - 1);

		if (process.xray(thickness) === desiredThickness) {
			thickness = process.xray(thickness);
			console.log(`X-ray x1`);
		}

		console.log(`Finished crystal ${thickness} microns`)
	}
}

solve([1375, 50000]);

console.log();
solve([1000, 4000, 8100]);