function aggregate(elements) {
	aggregate(elements, 0, (a, b) => a + b);
	aggregate(elements, 0, (a, b) => a + 1 / b);
	aggregate(elements, '', (a, b) => a + b);

	function aggregate(elements, inital, func) {
		let total = inital;

		for (let element of elements) {
			total = func(total, element);
		}

		console.log(total);
	}
}

aggregate([1, 2, 3]);

console.log();
aggregate([2, 4, 8, 16]);