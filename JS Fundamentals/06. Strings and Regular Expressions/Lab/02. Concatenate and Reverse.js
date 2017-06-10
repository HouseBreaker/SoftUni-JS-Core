function solve(arr) {
	let concatenated = arr.reduce((a, b) => a + b).split('').reverse().join('');

	console.log(concatenated)
}

solve(['race', 'car']);

console.log();
solve(['I', 'am', 'student']);