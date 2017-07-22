class TitleBar {
	constructor(title) {
		this.title = title;
		this.links = [];
	}

	addLink(href, name) {
		this.links.push({href: href, name: name});
	}

	appendTo(selector) {
		let generatedMenu = this.generate();
		$(selector).prepend(generatedMenu);
	}

	generate() {
		let links = this.links.map(link => `<a class="menu-link" href="${link.href}">${link.name}</a>`);
		let linksHtml = links.join(`${'\t'.repeat(6)}\n`);
		let element = $(
			`<header class="header">
				<div class="header-row">
					<a class="button">&#9776;</a>
					<span class="title">${this.title}</span>
				</div>
				<div class="drawer">
					<nav class="menu">
						${linksHtml}
					</nav>
				</div>
			</header>`);

		element.find('.drawer').hide();

		element.find('.button').on('click', () => {
			element.find('.drawer').toggle();
		});

		return element;
	}
}