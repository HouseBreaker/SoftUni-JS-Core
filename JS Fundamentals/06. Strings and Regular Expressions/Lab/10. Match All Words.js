function solve(text) {
	let regex = /\w+/g;

	let words = text.match(regex);

	console.log(words.join('|'))
}


solve('A Regular Expression needs to have the global flag in order to match all occurrences in the text');