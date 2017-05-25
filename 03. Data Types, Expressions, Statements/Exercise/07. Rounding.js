function roundToPrecision([numberToRound, precision]) {
	console.log(Number(numberToRound.toFixed(Math.min(precision, 15))))
}

roundToPrecision([3.1415926535897932384626433832795, 2]);
roundToPrecision([10.5, 3]);
