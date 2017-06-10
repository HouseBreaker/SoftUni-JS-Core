function solve(text, wordsToCensor) {
	let censoredText = text;
	wordsToCensor.forEach(a => {
		while (censoredText.indexOf(a) !== -1) {
			censoredText = censoredText.replace(a, '-'.repeat(a.length))
		}
	});

	console.log(censoredText);
}


solve('roses are red, violets are blue', [', violets are', 'red']);