function extractUppercaseWords(str) {
	let words = str.split(/\W+/g).filter(a => a);

	let uppercaseWords = words
		.map(a => a.toUpperCase())
		.join(", ");

	console.log(uppercaseWords)
}

extractUppercaseWords('Hi, how are you?');

console.log();
extractUppercaseWords('hello');