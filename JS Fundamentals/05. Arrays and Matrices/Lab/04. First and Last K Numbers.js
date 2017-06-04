function solve(args) {
	let k = args[0];

	let numbers = args.slice(1);

	let firstKNumbers = numbers.slice(0, k);
	let lastKNumbers = numbers.slice(-k);

	console.log(firstKNumbers.join(" "));
	console.log(lastKNumbers.join(" "));
}

solve([2, 7, 8, 9]);

console.log();
solve([3, 6, 7, 8, 9]);