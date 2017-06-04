function solve(args) {
	let result = [];

	for (let num of args) {
		if (num >= 0) {
			result.push(num);
		} else {
			result.unshift(num)
		}
	}

	console.log(result.join("\n"))
}

solve([7, -2, 8, 9]);

console.log();
solve([3, -2, 0, -1]);