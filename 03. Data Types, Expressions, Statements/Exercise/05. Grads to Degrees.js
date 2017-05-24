function gradsToDegrees(grads) {
	let gradsToDegrees = 400 / 360;

	let degrees = grads / gradsToDegrees;

	let degreesTurns = degrees % 360;

	if (degreesTurns < 0) {
		degreesTurns += 360;
	}

	return degreesTurns;
}

console.log(gradsToDegrees(100));
console.log(gradsToDegrees(400));
console.log(gradsToDegrees(850));
console.log(gradsToDegrees(-50));
