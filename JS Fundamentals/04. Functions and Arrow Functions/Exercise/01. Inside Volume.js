function solve(coordinates) {
	for (let i = 0; i < coordinates.length; i += 3) {
		let x = coordinates[i];
		let y = coordinates[i + 1];
		let z = coordinates[i + 2];

		if (isInVolume(x, y, z)) {
			console.log('inside');
		} else {
			console.log('outside')
		}
	}

	function isInVolume(x, y, z) {
		let x1 = 10, x2 = 50;
		let y1 = 20, y2 = 80;
		let z1 = 15, z2 = 50;

		let isInX = x >= x1 && x <= x2;
		let isInY = y >= y1 && y <= y2;
		let isInZ = z >= z1 && z <= z2;

		let isInside = isInX && isInY && isInZ;
		return isInside;
	}
}

solve();