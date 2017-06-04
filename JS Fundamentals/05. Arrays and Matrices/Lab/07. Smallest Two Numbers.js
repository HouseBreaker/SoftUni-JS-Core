function solve(arr) {
	let smallestTwo = arr.map(Number).sort((a, b) => a - b).slice(0, 2);

	console.log(smallestTwo.join(' '))
}

solve([30, 15, 50, 5]);

console.log();
solve([3, 0, 10, 4, 7, 3]);