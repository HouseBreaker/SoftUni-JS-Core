function solve(arr) {
	let flattenedMatrix = arr.concat.apply([], arr);
	let biggestElement = Math.max.apply(Math, flattenedMatrix);

	console.log(biggestElement);
}

solve([[20, 50, 10], [8, 33, 145]]);

console.log();
solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);