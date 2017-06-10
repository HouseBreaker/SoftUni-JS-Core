function solve(text) {
	let regex = /\((.+?)\)/g;

	let extracted = [];

	let matcher;
	while (matcher = regex.exec(text)) {
		extracted.push(matcher[1]);
	}

	console.log(extracted.join(', '));
}


solve('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');