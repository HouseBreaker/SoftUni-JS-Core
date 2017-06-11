function solve(arr) {
	let productsCitiesPrices = new Map();

	arr.forEach(line => {
		let tokens = line.split(' | ');

		let [city, product, price] = tokens;

		price = (+price);

		let cityData = {city, product, price};

		if (!productsCitiesPrices.has(cityData.product)) {
			productsCitiesPrices.set(cityData.product, new Map());
		}

		productsCitiesPrices.get(cityData.product).set(cityData.city, cityData.price);
	});

	for (let [key, value] of productsCitiesPrices) {
		let lowest = ([...value].reduce(function (a, b) {
			if (a[1] < b[1]) {
				return {city: a[0], price: a[1]};
			} else if (a[1] > b[1]) {
				return {city: b[0], price: b[1]};
			}

			return {city: a[0], price: a[1]};
		}));

		productsCitiesPrices.set(key, lowest);

		console.log(`${key} -> ${lowest.price} (${lowest.city})`);
	}
}

solve([
	'Sample Town | Sample Product | 1000',
	'Sample Town | Orange | 2',
	'Sample Town | Peach | 1',
	'Sofia | Orange | 3',
	'Sofia | Peach | 2',
	'New York | Sample Product | 1000.1',
	'New York | Burger | 10',
]);

// console.log();
// solve([
// 	'Sofia City | Audi | 100000',
// 	'Sofia City | BMW | 100000',
// 	'Sofia City | Mitsubishi | 10000',
// 	'Sofia City | Mercedes | 10000',
// 	'Sofia City | NoOffenseToCarLovers | 0',
// 	'Mexico City | Audi | 1000',
// 	'Mexico City | BMW | 99999',
// 	'New York City | Mitsubishi | 10000',
// 	'New York City | Mitsubishi | 1000',
// 	'Mexico City | Audi | 100000',
// 	'Washington City | Mercedes | 1000'
// ]);