function solve(arr) {
	let regex = /([a-zA-Z]+)/g;

	let headers = arr[0].match(regex);

	let towns = [];

	arr.slice(1).forEach(townStr => {
		let town = townStr.split(/\s*\|\s*/).filter(a => a !== '');

		let obj = {};

		town.forEach((item, i) => {
			let header = headers[i];
			let value = !isNaN(item) ? Number(item) : item;
			obj[header] = value;
		});

		towns.push(obj);
	});

	console.log(JSON.stringify(towns));
}

solve([
	'| Town | Latitude | Longitude |',
	'| Sofia | 42.696552 | 23.32601 |',
	'| Beijing | 39.913818 | 116.363625 |']
);