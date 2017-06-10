function solve(arr) {
	function escape(str) {
		return str.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
	}

	let escaped = arr.map(escape);

	let html = '';

	html += '<ul>\n';

	html += escaped.map(a => `  <li>${a}</li>`).join('\n');

	html += '\n</ul>';

	console.log(html);
}


solve(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']);