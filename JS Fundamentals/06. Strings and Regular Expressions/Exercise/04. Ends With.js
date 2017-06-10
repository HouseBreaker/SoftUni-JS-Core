function solve(text, endsWithText) {
	let result = text.endsWith(endsWithText);
	console.log(result);
}

solve('This sentence ends with fun?', 'fun?');

console.log();
solve('This is Houston, we have…', 'We have…');