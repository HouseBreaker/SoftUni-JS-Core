function solve(text) {
	let words = text[0]
		.split(/\W+/g)
		.filter(a => a !== '')
		.map(a => a.toLowerCase());

	let wordsCount = new Map();

	words.forEach((w) => {
		wordsCount.has(w) ?
			wordsCount.set(w, wordsCount.get(w) + 1) :
			wordsCount.set(w, 1);
	});

	let allWords = Array.from(wordsCount.keys()).sort();
	allWords.forEach(w =>
		console.log(`'${w}' -> ${wordsCount.get(w)} times`)
	);
}

solve(['Far too slow, you\'re far too slow.']);

console.log();
solve(['JS devs use Node.js for server-side JS.-- JS for devs']);
