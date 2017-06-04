function solve(matrix) {
	let topDiagonalSum = 0;
	let bottomDiagonalSum = 0;

	for (let row = 0, col = 0; row < matrix.length, col < matrix[0].length; row++, col++) {
		topDiagonalSum += matrix[row][col];
	}

	for (let row = matrix.length - 1, col = 0; row >= 0, col < matrix[0].length; row--, col++) {
		bottomDiagonalSum += matrix[row][col];
	}

	console.log(`${topDiagonalSum} ${bottomDiagonalSum}`);
}

solve([[20, 40], [10, 60]]);

console.log();
solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);