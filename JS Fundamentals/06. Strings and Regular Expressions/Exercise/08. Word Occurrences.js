function solve(text, searchString) {
	let regex = new RegExp(`\\b${searchString}\\b`, 'gi');

	let occurrencesCount = 0;

	let match;
	while (match = regex.exec(text)) {
		occurrencesCount++;
	}

	console.log(occurrencesCount);
}

solve('The waterfall was so high, that the child couldn’t see its peak.', 'the');

console.log();
solve('How do you plan on achieving that? How? How can you even think of that?', 'how');

console.log();
solve('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there');