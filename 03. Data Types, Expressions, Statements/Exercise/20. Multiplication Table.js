function printMultiplicationTable(size) {
	let result = '';

	result += '<table border="1">\n';


	let headings = '  <tr><th>x</th>';
	for (let i = 1; i <= size; i++) {
		headings += `<th>${i}</th>`;
	}

	headings += '</tr>\n';

	result += headings;

	for (let row = 1; row <= size; row++) {
		result += `  <tr><th>${row}</th>`;

		for (let col = 1; col <= size; col++) {
			result += `<td>${row * col}</td>`;
		}

		result += '</tr>\n';
	}

	result += '</table>';
	console.log(result);
}

printMultiplicationTable(5);
