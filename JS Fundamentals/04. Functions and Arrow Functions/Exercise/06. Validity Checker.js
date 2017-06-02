function solve(args) {
	function Point (x, y) {
		this.x = x;
		this.y = y;
		this.isValidDistanceTo = function (otherPoint) {
			let distance = Math.sqrt((otherPoint.x - this.x) ** 2 + (otherPoint.y - this.y) ** 2);

			let isValidDistance = Math.ceil(distance) === distance;
			return isValidDistance;
		}
	}

	let x1 = args[0], y1 = args[1];
	let x2 = args[2], y2 = args[3];

	let point1 = new Point(x1, y1);
	let point2 = new Point(x2, y2);
	let center = new Point(0, 0);

	function twoPointsHaveValidDistance(point1, point2) {
		let result = `{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is `;

		result += point1.isValidDistanceTo(point2) ? 'valid' : 'invalid';

		return result;
	}

	console.log(twoPointsHaveValidDistance(point1, center));
	console.log(twoPointsHaveValidDistance(point2, center));
	console.log(twoPointsHaveValidDistance(point1, point2));
}

solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);
