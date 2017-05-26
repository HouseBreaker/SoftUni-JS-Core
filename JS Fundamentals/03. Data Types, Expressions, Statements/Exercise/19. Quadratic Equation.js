function quadraticEquation(a, b, c) {
	let discriminant = (b ** 2) - (4 * a * c);

	let D = discriminant;

	if (D > 0) {
		let x1 = (-b + Math.sqrt(D)) / (2 * a);
		let x2 = (-b - Math.sqrt(D)) / (2 * a);

		console.log([x1, x2].sort((a, b) => a > b).join('\n'));
	} else if (D === 0) {
		let x = -b / (2 * a);
		console.log(x)
	} else {
		console.log('No')
	}
}

quadraticEquation(6, 11, -35);
quadraticEquation(1, -12, 36);
quadraticEquation(5, 2, 1);
