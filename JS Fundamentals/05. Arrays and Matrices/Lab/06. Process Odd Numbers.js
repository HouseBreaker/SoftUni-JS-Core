function solve(arr) {
	let result = arr
		.filter((_, i) => i % 2 === 1)
		.map(a => a * 2)
		.reverse();

	console.log(result.join(' '))
}

solve([10, 15, 20, 25]);

console.log();
solve([3, 0, 10, 4, 7, 3]);