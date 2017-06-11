function solve(jsonStr) {
	let scoreData = JSON.parse(jsonStr);

	let headers = Object.keys(scoreData[0]);

	let html = '';

	html += '<table>\n';
	html += '  <tr>';

	headers.forEach(item => {
		html += `<th>${item}</th>`;
	});

	html += '</tr>\n';

	scoreData.forEach((result) => {
		html += '  <tr>';

		html += `<td>${escape(result.name)}</td><td>${result.score}</td>`;

		html += '</tr>\n';
	});

	html += '</table>';

	console.log(html);

	function escape(str) {
		return str.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#39;");
	}
}

solve('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');