function solve(arr) {
	let regex = / -> | : /g;

	let tokens = arr.map(line => {
		let result = line.split(regex);

		let [city, product, sales, singleUnitPrice] = result;

		sales = (+sales);
		singleUnitPrice = (+singleUnitPrice);

		let obj = {city, product, sales, singleUnitPrice};

		return obj;
	});

	let productsMap = new Map();

	tokens.forEach(token => {
		if (!productsMap.has(token.city)) {
			productsMap.set(token.city, new Map());
		}

		if (!productsMap.get(token.city).has(token.product)) {
			productsMap.get(token.city).set(token.product, 0);
		}

		let currentTotalSold = productsMap.get(token.city).get(token.product);
		let tokenTotalSold = token.singleUnitPrice * token.sales;

		let totalSold = currentTotalSold + tokenTotalSold;

		productsMap.get(token.city).set(token.product, totalSold);
	});

	Array.from(productsMap.keys()).forEach(city => {
		console.log(`Town - ${city}`);

		Array.from(productsMap.get(city)).forEach(productSales => {
			let [product, totalSales] = productSales;

			console.log(`$$$${product} : ${totalSales}`)
		});
	});
}

solve([
	'Sofia -> Laptops HP -> 200 : 2000',
	'Sofia -> Raspberry -> 200000 : 1500',
	'Sofia -> Audi Q7 -> 200 : 100000',
	'Montana -> Portokals -> 200000 : 1',
	'Montana -> Qgodas -> 20000 : 0.2',
	'Montana -> Chereshas -> 1000 : 0.3'
]);
