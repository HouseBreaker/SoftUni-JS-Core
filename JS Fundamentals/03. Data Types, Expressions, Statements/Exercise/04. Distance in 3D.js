function distanceBetweenTwoObjectsIn3D([object1X, object1Y, object1Z, object2X, object2Y, object2Z]) {
	function coordinatesToObject(x, y, z) {
		let obj = {
			x: x,
			y: y,
			z: z
		};

		return obj;
	}

	let obj1 = coordinatesToObject(object1X, object1Y, object1Z);
	let obj2 = coordinatesToObject(object2X, object2Y, object2Z);

	let distanceBetweenObj1AndObj2 = Math.sqrt((obj1.x - obj2.x) ** 2 + (obj1.y - obj2.y) ** 2 + (obj1.z - obj2.z) ** 2);

	console.log(distanceBetweenObj1AndObj2);
}

distanceBetweenTwoObjectsIn3D([1, 1, 0, 5, 4, 0]);
distanceBetweenTwoObjectsIn3D([3.5, 0, 1, 0, 2, -1]);