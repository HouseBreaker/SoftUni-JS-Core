function solve(towns) {
	let orderedTowns = towns
		.map(arr => arr
			.substr(2)
			.split(' ')
			.filter(a => a !== '')
		).map(arr => ({
				name: arr.slice(0, arr.indexOf('|')).join(' '),
				income: Number(arr.slice(arr.indexOf('|') + 1).join(''))
			})
		);

	let townsList = orderedTowns.map(a => a.name);
	let aggregatedIncome = orderedTowns.map(a => a.income).reduce((a, b) => a + b);

	console.log(townsList.join(', '));
	console.log(aggregatedIncome);
}


solve([
	'| Sofia           | 300',
	'| Veliko Tarnovo  | 500',
	'| Yambol          | 275'
]);