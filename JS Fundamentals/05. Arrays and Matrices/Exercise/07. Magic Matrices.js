function solve(matrix) {
	let sum = matrix[0].reduce((total, current) => total + current);

	Array.prototype.sum = function () {
		return this.reduce((total, current) => total + current);
	};

	for (let row = 0; row < matrix.length; row++) {
		let currentRowSum = matrix[row].sum();
		let currentColSum = matrix.map(arr => arr[row]).sum();

		if (currentRowSum !== sum || currentColSum !== sum) {
			console.log('false');
			return;
		}
	}

	console.log('true');
}

solve([
	[4, 5, 6],
	[6, 5, 4],
	[5, 5, 5]
]);

console.log();
solve([
	[11, 32, 45],
	[21, 0, 1],
	[21, 1, 1]
]);

console.log();
solve([
	[1, 0, 0],
	[0, 0, 1],
	[0, 1, 0]
]);