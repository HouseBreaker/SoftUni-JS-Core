function solve(text) {
	let arr = text[0].split(/\W+/g).filter(a => a !== '');

	let occurrences = {};

	arr.forEach((current) => occurrences[current] = occurrences[current] ? occurrences[current] + 1 : 1);

	console.log(JSON.stringify(occurrences));
}

solve(['Far too slow, you\'re far too slow.']);

console.log();
solve('JS devs use Node.js for server-side JS.-- JS for devs');
