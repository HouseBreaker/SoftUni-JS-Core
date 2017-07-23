class Task {
	constructor(title, deadline) {
		this.title = title;
		this.deadline = deadline;
		this.status = 'Open';
	}

	get deadline() {
		return this._deadline;
	}

	set deadline(deadline) {
		if (deadline < new Date()) {
			throw new Error('Deadline is in the past!');
		}

		this._deadline = deadline;
	}

	get status() {
		return this._status;
	}

	set status(status) {
		this._status = status;
	}

	get isOverdue() {
		let isOverdue = this.deadline < new Date();
		let isCompleted = this.status === "Complete";

		return isOverdue && !isCompleted;
	}

	static comparator(task1, task2) {
		let taskPriorities = {
			'Overdue': 1,
			'In Progress': 2,
			'Open': 3,
			'Complete': 4,
		};

		if (task1.isOverdue) {
			task1.status = "Overdue";
		}

		if (task2.isOverdue) {
			task2.status = "Overdue";
		}

		let task1Status = task1.status;
		let task2Status = task2.status;
		let taskPriority1 = taskPriorities[task1Status];
		let taskPriority2 = taskPriorities[task2Status];

		let compareResult = taskPriority1 - taskPriority2;

		if (compareResult === 0) {
			compareResult = task1.deadline < task2.deadline ? -1 : 1;
		}

		return compareResult;
	}

	toString() {
		let statuses = {
			"Open": "\u2731",
			"In Progress": "\u219D",
			"Complete": "\u2714",
			"Overdue": "\u26A0"
		};

		if (this.isOverdue) {
			this.status = "Overdue";
		}

		let statusIcon = statuses[this.status];

		statusIcon = statuses[this.status];

		let deadline = this.isOverdue ? '(overdue)' : `(deadline: ${this.deadline}`;

		if (this.status === 'Complete') {
			deadline = '';
		}

		let result = `[${statusIcon}] ${this.title} ${deadline}`;
		return result;
	}
}

module.exports = Task;