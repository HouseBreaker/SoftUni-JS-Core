class Contact {
	constructor(firstName, lastName, phone, email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email;
		this.domElement = this.generateElement();
		this.online = false;
	}

	set online(onlineStatus) {
		this._online = onlineStatus;

		let titleElement = this.domElement.find('.title');

		titleElement.removeClass('online');

		if (onlineStatus === true) {
			titleElement.addClass('online')
		}
	}

	generateElement() {
		let domElement = $(`
		<article>
		    <div class="title">${this.firstName} ${this.lastName}<button>&#8505;</button></div>
		    <div class="info">
		        <span>&phone; ${this.phone}</span>
		        <span>&#9993; ${this.email}</span>
		    </div>
		</article>
		`);

		return domElement;
	}

	render(id) {
		$(`#${id}`).append(this.domElement);
		let infoPane = $(this.domElement.find('.info'));
		infoPane.hide();
		this.domElement.find('button').on('click', () => {
			infoPane.toggle();
		});
	}
}