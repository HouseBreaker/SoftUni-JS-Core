function solve(arr) {
	let rotationCount = arr.pop();

	rotationCount %= arr.length;

	for (let i = 0; i < rotationCount; i++) {
		arr.unshift(arr.pop());
	}

	console.log(arr.join(' '))
}

solve('1 2 3 4 2'.split(' '));

console.log();
solve('Banana Orange Coconut Apple 15'.split(' '));
