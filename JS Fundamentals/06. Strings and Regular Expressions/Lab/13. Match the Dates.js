function solve(dates) {
	let regex = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;

	let match;
	while (match = regex.exec(dates)) {
		let day = match[1], month = match[2], year = match[3];

		console.log(`${day}-${month}-${year} (Day: ${day}, Month: ${month}, Year: ${year})`)
	}
}

solve([
	'1-Jan-1999 is a valid date.',
	'So is 01-July-2000.',
	'I am an awful liar, by the way',
	'-- Ivo, 28-Sep-2016.'
]);
