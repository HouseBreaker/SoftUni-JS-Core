function move(command) {
	if (!command) {
		return;
	}

	let functions = {
		'left': moveLeft,
		'right': moveRight,
		'print': print
	};

	functions[command]();

	function moveLeft() {
		let selectedItem = $('#selected-towns').find(":selected");

		$('#available-towns').append(selectedItem);
	}

	function moveRight() {
		let selectedItem = $('#available-towns').find(":selected");

		$('#selected-towns').append(selectedItem);
	}

	function print() {
		let towns =
			[...$('#selected-towns').find('option')]
			.map(a => a.text);

		let townsString = towns.join('; ');

		$('#output').text(townsString);
	}
}