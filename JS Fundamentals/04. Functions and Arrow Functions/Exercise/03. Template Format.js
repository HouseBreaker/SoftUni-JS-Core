function solve(args) {
	function solveQuestion(question, answer) {
		let template = `  <question>\n    ${question}\n  </question>\n  <answer>\n    ${answer}\n  </answer>`;

		return template;
	}

	console.log('<?xml version="1.0" encoding="UTF-8"?>\n<quiz>');

	for (let i = 0; i < args.length; i += 2) {
		let question = args[i];
		let answer = args[i + 1];

		console.log(solveQuestion(question, answer))
	}

	console.log('</quiz>');
}

solve(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);
solve(["Dry ice is a frozen form of which gas?",
	"Carbon Dioxide",
	"What is the brightest star in the night sky?",
	"Sirius"]
);
