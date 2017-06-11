function solve(jsonStr) {
	let jsonData = JSON.parse(jsonStr);

	let headers = Object.keys(jsonData[0]);

	let html = '';

	html += '<table>\n';
	html += '  <tr>';

	headers.forEach(item => {
		html += `<th>${item}</th>`;
	});

	html += '</tr>\n';

	jsonData.forEach((data) => {
		html += '  <tr>';


		for (let key in data) {
			html += `<td>${escape(data[key])}</td>`;
		}

		html += '</tr>\n';
	});

	html += '</table>';

	console.log(html);

	function escape(str) {
		str = str.toString();

		return str.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#39;");
	}
}

solve('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');