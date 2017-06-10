function solve(text) {
	let regex = /(-?\d+) *?\* *(-?\d(?:\.\d+)?)/g;

	text = text.replace(regex, (match, num1, num2) => (+num1) * (+num2));

	console.log(text);
}

solve('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');