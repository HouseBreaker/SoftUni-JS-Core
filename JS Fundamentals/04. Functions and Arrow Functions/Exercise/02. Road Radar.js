function solve([speed, area]) {
	let speedLimits = {
		'city': 50,
		'residential': 20,
		'motorway': 130,
		'interstate': 90
	};

	let currentSpeedLimit = speedLimits[area];
	let infractionSpeed = speed - currentSpeedLimit;
	if (infractionSpeed > 0 && infractionSpeed <= 20) {
		console.log('speeding');
	} else if (infractionSpeed > 20 && infractionSpeed <= 40) {
		console.log('excessive speeding');
	} else if (infractionSpeed > 40) {
		console.log('reckless driving');
	}
}

solve(21, 'residential');