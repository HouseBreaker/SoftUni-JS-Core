function solve(args) {
	let numbers = args.map(Number);

	let evenNumbers = args.filter((e, i, a) => i % 2 === 0);

	console.log(evenNumbers.join(' '))
}

solve(['20', '30', '40']);

console.log();
solve(['5', '10']);