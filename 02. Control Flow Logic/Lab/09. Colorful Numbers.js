function printColorfulNumbers(num) {
	let colors = 'blue green'.split(' ');

	console.log('<ul>');

	for (let i = 1; i <= num; i++) {
		let blueOrGreenIndex = i % 2;
		console.log(`  <li><span style='color:${colors[blueOrGreenIndex]}'>${i}</span></li>`)
	}

	console.log('</ul>');
}

printColorfulNumbers(10);