function solve(searchText, text) {
	// let searchText = args[0];
	// let text = args[1];

	let count = 0;
	let searchStartIndex = 0;
	let indexOfWord = text.indexOf(searchText, searchStartIndex);
	while (indexOfWord !== -1) {
		count++;

		searchStartIndex = indexOfWord;
		indexOfWord = text.indexOf(searchText, searchStartIndex + 1);
	}

	console.log(count)
}

solve('the', 'The quick brown fox jumps over the lay dog.');

console.log();
solve('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');