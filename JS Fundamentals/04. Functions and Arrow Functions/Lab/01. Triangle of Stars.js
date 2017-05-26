function printTriangleOfStars(count) {
	function printStars(count) {
		console.log('*'.repeat(count));
	}

	for (let i = 1; i <= count; i++) {
		printStars(i);
	}

	for (let i = count-1; i >= 1; i--) {
		printStars(i);
	}
}

printTriangleOfStars(1);

console.log();
printTriangleOfStars(2);

console.log();
printTriangleOfStars(5);