function solve(arr) {
	let products = [];

	for (let i = 0; i < arr.length; i += 2) {
		let obj = {
			name: arr[i],
			price: (+arr[i + 1])
		};

		products.push(obj)
	}

	let productsPurchased = products.map(a => a.name);
	let totalPrice = products.map(a => a.price).reduce((a, b) => a + b);

	console.log(`You purchased ${productsPurchased.join(', ')} for a total sum of ${totalPrice}`);
}


solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);

console.log();
solve(['Cola', '1.35', 'Pancakes', '2.88']);