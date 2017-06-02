function solve(num) {
	let numArray = num.toString().split('').map(Number);

	numArray.average = function () {
		this.sum = function () {
			return this.reduce((a, b) => a + b)
		};

		return this.sum() / this.length;
	};

	while(numArray.average() <= 5) {
		numArray.push(9);
	}

	let finalNum = Number(numArray.join(''));
	console.log(finalNum);
}

solve(101);
solve(5835);
