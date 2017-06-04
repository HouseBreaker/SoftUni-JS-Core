function solve(matrix) {
	let neighborCount = 0;

	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			let currentElement = matrix[row][col];

			let hasLower = row < matrix.length - 1;
			let hasRight = col < matrix[row].length - 1;

			let lowerElement = null;
			if (hasLower) {
				lowerElement = matrix[row + 1][col]
			}

			let rightElement = null;
			if (hasRight) {
				rightElement = matrix[row][col + 1];
			}

			if (currentElement === lowerElement) {
				neighborCount++;
			}

			if (currentElement === rightElement) {
				neighborCount++;
			}
		}
	}

	console.log(neighborCount);
}

// solve([
// 	['2', '3', '4', '7', '0'],
// 	['4', '0', '5', '3', '4'],
// 	['2', '3', '5', '4', '2'],
// 	['9', '8', '7', '5', '4']
// ]);
//
// console.log();
// solve([
// 	['test', 'yes', 'yo', 'ho'],
// 	['well', 'done', 'yo', '6'],
// 	['not', 'done', 'yet', '5']
// ]);

console.log();
solve([
	[2, 2, 5, 7, 4],
	[4, 0, 5, 3, 4],
	[2, 5, 5, 4, 2]
]);