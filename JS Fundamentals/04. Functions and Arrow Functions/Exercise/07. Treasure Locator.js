function solve(args) {
	function Island(name, x1, x2, y1, y2) {
		this.name = name;
		this.x1 = x1;
		this.x2 = x2;
		this.y1 = y1;
		this.y2 = y2;

		this.hasTreasure = function (point) {
			let isInsideHorizontal = point.x >= this.x1 && point.x <= this.x2;
			let isInsideVertical = point.y >= this.y1 && point.y <= this.y2;
			return isInsideHorizontal && isInsideVertical;
		};
	}

	let islands = [
		new Island('Tokelau', 8, 9, 0, 1),
		new Island('Tuvalu', 1, 3, 1, 3),
		new Island('Samoa', 5, 7, 3, 6),
		new Island('Tonga', 0, 2, 6, 8),
		new Island('Cook', 4, 9, 7, 8),
	];

	let treasures = [];

	for (let i = 0; i < args.length; i += 2) {
		let x = args[i];
		let y = args[i + 1];

		let treasure = {
			x: x,
			y: y
		};

		treasures.push(treasure)
	}

	for (let treasure of treasures) {
		let containingIsland = islands.find(island => island.hasTreasure(treasure));

		console.log(containingIsland ? containingIsland.name : 'On the bottom of the ocean');
	}
}

solve([4, 2, 1.5, 6.5, 1, 3]);
solve([6, 4]);
