function solve(arr) {
	let currentBiggest = Number.MIN_SAFE_INTEGER;

	let nonDecreasingSequence = [];

	for (let item of arr) {
		if (item >= currentBiggest) {
			currentBiggest = item;
			nonDecreasingSequence.push(item);
		}
	}

	console.log(nonDecreasingSequence.join('\n'))
}

solve('1 3 8 4 10 12 3 2 24'.split(' '));

console.log();
solve('1 2 3 4'.split(' '));

console.log();
solve('20 3 2 15 6 1'.split(' '));