function fruitOrVegetable(food) {
	let fruits = 'banana apple kiwi cherry lemon grapes peach'.split(' ');
	let vegetables = 'tomato cucumber pepper onion garlic parsley'.split(' ');

	if (fruits.includes(food)) {
		console.log('fruit');
	} else if (vegetables.includes(food)) {
		console.log('vegetable');
	} else {
		console.log('unknown');
	}
}

fruitOrVegetable('banana');
fruitOrVegetable('cucumber');
fruitOrVegetable('pizza');