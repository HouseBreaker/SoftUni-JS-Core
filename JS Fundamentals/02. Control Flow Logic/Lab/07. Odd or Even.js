function oddOrEven(num) {
	function isInteger(num) {
		return num === Math.round(num);
	}

	if (isInteger(num)) {
		if (num % 2 === 0) {
			console.log('even')
		} else {
			console.log('odd')
		}
	} else {
		console.log('invalid')
	}
}

oddOrEven(5);
oddOrEven(8);
oddOrEven(1.5);