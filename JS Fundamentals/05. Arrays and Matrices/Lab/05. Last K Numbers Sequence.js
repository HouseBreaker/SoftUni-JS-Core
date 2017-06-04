function solve(n, k) {
	let arr = [1];

	for (let i = 1; i < n; i++) {
		let lastKElements = arr.filter((_, index) => index < i).slice(-k);
		let lastKElementsSum = lastKElements.reduce((total, current) => total + current);

		arr = arr.concat(lastKElementsSum)
	}

	console.log(arr.join(' '))
}

solve(6, 3);

console.log();
solve(8, 2);