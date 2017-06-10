function solve(rows, cols) {
	let matrix = new Array(rows);

	for (let row = 0; row < rows; row++) {
		matrix[row] = new Array(cols).fill(0);
	}

	let totalElements = rows * cols;

	let num = 1;

	let row = 0;
	let col = 0;

	let directions = {
		left: {row: 0, col: -1},
		right: {row: 0, col: 1},
		up: {row: -1, col: 0},
		down: {row: 1, col: 0},
	};

	let direction = 'right';

	while (num <= totalElements) {
		// todo
	}

	function printMatrix(matrix) {
		let matrixOutput = '';

		for (let row = 0; row < matrix.length; row++) {
			for (let col = 0; col < matrix[row].length; col++) {
				matrixOutput += matrix[row][col] + ' '
			}

			matrixOutput += '\n';
		}

		console.log(matrixOutput);
		return {matrixOutput, row, col};
	}

	console.log(matrix)
}

// console.log();
// solve(5, 5);

console.log();
solve(3, 3);