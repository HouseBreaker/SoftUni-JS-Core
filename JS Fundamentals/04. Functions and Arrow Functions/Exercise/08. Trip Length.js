function solve(args) {
	function Point(x, y) {
		this.x = x;
		this.y = y;
		this.distanceTo = function (otherPoint) {
			let distance = Math.sqrt((otherPoint.x - this.x) ** 2 + (otherPoint.y - this.y) ** 2);
			return distance;
		}
	}

	let x1 = args[0], y1 = args[1];
	let x2 = args[2], y2 = args[3];
	let x3 = args[4], y3 = args[5];

	let point1 = new Point(x1, y1);
	let point2 = new Point(x2, y2);
	let point3 = new Point(x3, y3);

	let allDistances = [
		{name: '1->2->3', distance: point1.distanceTo(point2) + point2.distanceTo(point3)},
		{name: '1->3->2', distance: point1.distanceTo(point3) + point3.distanceTo(point2)},
		{name: '2->1->3', distance: point2.distanceTo(point1) + point1.distanceTo(point3)},
		{name: '2->3->1', distance: point2.distanceTo(point3) + point3.distanceTo(point1)},
		{name: '3->1->2', distance: point3.distanceTo(point1) + point1.distanceTo(point2)},
		{name: '3->2->1', distance: point3.distanceTo(point2) + point2.distanceTo(point1)},
	];

	allDistances.sort((a, b) => a.distance > b.distance);

	let shortestDistance = allDistances[0];

	console.log(`${shortestDistance.name}: ${shortestDistance.distance}`)
}

solve([0, 0, 2, 0, 4, 0]);

console.log();
solve([5, 1, 1, 1, 5, 4]);

console.log();
solve([-1, -2, 3.5, 0, 0, 2]);
