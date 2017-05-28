function printFigureOf4Squares(size) {
	let dashesCount = size - 2;
	let dashes = '-'.repeat(dashesCount);
	let spaces = ' '.repeat(dashesCount);

	console.log(`+${dashes}+${dashes}+`);

	if (size > 2) { // ¯\_(ツ)_/¯
		for (let i = 0; i < size / 2 - 2; i++) {
			console.log(`|${spaces}|${spaces}|`);
		}

		console.log(`+${dashes}+${dashes}+`);

		for (let i = 0; i < size / 2 - 2; i++) {
			console.log(`|${spaces}|${spaces}|`);
		}

		console.log(`+${dashes}+${dashes}+`);
	}
}

console.log();
printFigureOf4Squares(2);

console.log();
printFigureOf4Squares(4);

console.log();
printFigureOf4Squares(5);

console.log();
printFigureOf4Squares(6);

console.log();
printFigureOf4Squares(7);
