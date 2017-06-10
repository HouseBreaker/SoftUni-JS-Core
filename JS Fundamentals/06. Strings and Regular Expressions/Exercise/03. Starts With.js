function solve(text, startsWithText) {
	let result = text.startsWith(startsWithText);
	console.log(result);
}

solve('How have you been?', 'how');

console.log();
solve('The quick brown fox…', 'The quick brown fox…');