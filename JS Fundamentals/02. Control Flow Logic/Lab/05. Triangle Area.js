function calculateCircleArea(a, b, c) {
	let perimeter = (a + b + c) / 2;
	let p = perimeter;
	let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

	console.log(area);
}

calculateCircleArea(2, 3.5, 4);