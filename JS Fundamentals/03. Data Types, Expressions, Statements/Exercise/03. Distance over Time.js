function distanceOverTime([object1Velocity, object2Velocity, timeInSeconds]) {
	function calculateDistance(objectVelocity, timeInSeconds) {
		return objectVelocity * timeInSeconds * 1000 / 3600;
	}

	let object1Distance = calculateDistance(object1Velocity, timeInSeconds);
	let object2Distance = calculateDistance(object2Velocity, timeInSeconds);

	let distanceDifference = Math.abs(object1Distance - object2Distance);

	console.log(distanceDifference)
}

distanceOverTime([0, 60, 3600]);