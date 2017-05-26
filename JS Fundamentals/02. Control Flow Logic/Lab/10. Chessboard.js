function printChessboard(num) {
	let colors = 'white black'.split(' ');

	console.log('<div class="chessboard">');

	for (let row = 1; row <= num; row++) {
		console.log('  <div>');
		for (let col = 0; col < num; col++) {
			let whiteOrBlackIndex = (row % 2 + col % 2) % 2;
			let color = colors[whiteOrBlackIndex];
			console.log(`    <span class="${color}"></span>`);
		}

		console.log('  </div>');
	}

	console.log('</div>');
}


printChessboard(3);