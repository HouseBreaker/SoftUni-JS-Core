function squareOfStars(count = 5) {
	function repeatStars(count) {
		for (let i = 0; i < count; i++) {
			console.log('*' + ' *'.repeat(count - 1))
		}
	}

	repeatStars(count);
}

squareOfStars(1);

console.log();
squareOfStars(2);

console.log();
squareOfStars(5);

console.log();
squareOfStars();