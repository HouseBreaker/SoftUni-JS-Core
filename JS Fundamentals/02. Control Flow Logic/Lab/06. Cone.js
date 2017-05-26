function cone(baseRadius, height) {
	// volume: (1/3)π*r^2*h
	// area: π*r(r + √(r^2 + h^2))

	let r = baseRadius;
	let h = height;

	let volume = (Math.PI * r ** 2 * h) / 3;
	let area = Math.PI * r * (r + Math.sqrt(r ** 2 + h ** 2));

	console.log(`volume = ${volume}`);
	console.log(`area = ${area}`);
}

cone(3, 5);
cone(3.3, 7.8);