function solve(maxLength) {
	let lettersPattern = 'ATCGTTAGGG';
	let dashesPattern = '0242';
	let asterisksPattern = '2101';

	for (let i = 0, j = 0; i < maxLength; i++, j += 2) {
		let leftLetter = lettersPattern[j % lettersPattern.length];
		let rightLetter = lettersPattern[j % lettersPattern.length + 1];
		let dashes = '-'.repeat(Number(dashesPattern[i % dashesPattern.length]));
		let asterisks = '*'.repeat(Number(asterisksPattern[i % asterisksPattern.length]));

		let pattern = `${asterisks}${leftLetter}${dashes}${rightLetter}${asterisks}`;
		console.log(pattern)
	}
}

solve(4);

console.log();
solve(10);

console.log();
solve(200);