let expect = require('chai').expect;

let SortedList = require('./sorted-list');

describe('Sorted List Tests', () => {
	let myList;
	beforeEach(function() {
		myList = new SortedList();
	});

	function addElementsToList(elements = [3, 4, 5, 1, 2]) {
		elements.forEach(element => {
			myList.add(element);
		});
	}

	describe('Properties', () => {
		it('should have "add"', () => {
			expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
		});

		it('should have "remove"', () => {
			expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
		});

		it('should have "get"', () => {
			expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
		});

		it('should have "size" getter', () => {
			expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
		});
	});

	describe('Functions', () => {
		describe('add', () => {
			it('should add an element to the list correctly', () => {
				let element = 2;

				myList.add(element);
				expect(myList.list.length).to.equal(1);
				expect(myList.list[0]).to.equal(element);
			});

			it('should add several elements to the list correctly', () => {
				let elements = [1, 2, 3, 4, 5];
				addElementsToList(elements);

				expect(myList.list.length).to.equal(elements.length);
				expect(myList.list[0]).to.equal(1);
				expect(myList.list[1]).to.equal(2);
				expect(myList.list[2]).to.equal(3);
				expect(myList.list[3]).to.equal(4);
				expect(myList.list[4]).to.equal(5);
			});

			it('the list should be sorted in ascending order', () => {
				let elements = [4, 5, 2, 3, 1];
				addElementsToList(elements);

				expect(myList.list.length).to.equal(elements.length);
				expect(myList.list[0]).to.equal(1);
				expect(myList.list[1]).to.equal(2);
				expect(myList.list[2]).to.equal(3);
				expect(myList.list[3]).to.equal(4);
				expect(myList.list[4]).to.equal(5);
			})
		});

		describe('remove', () => {
			it('should remove an element correctly', () => {
				let elements = [3, 4, 5, 1, 2];

				elements.forEach(element => {
					myList.add(element);
				});

				myList.remove(1);

				expect(myList.list.length).to.equal(4);
				expect(myList.list[0]).to.equal(1);
				expect(myList.list[1]).to.equal(3);
				expect(myList.list[2]).to.equal(4);
				expect(myList.list[3]).to.equal(5);
			});

			it('should remove multiple elements correctly', () => {
				let elements = [1, 2, 3, 4, 5];

				elements.forEach(element => {
					myList.add(element);
				});

				myList.remove(4);
				myList.remove(2);
				myList.remove(0);

				expect(myList.list.length).to.equal(2);
				expect(myList.list[0]).to.equal(2);
				expect(myList.list[1]).to.equal(4);
			});

			it('should throw when index is less than 0', () => {
				addElementsToList();

				expect(() => { myList.remove(-1) }).to.throw(Error, 'Index was outside the bounds of the collection.');
			});

			it('should throw when index is equal to the list length', () => {
				let elements = [3, 4, 5, 1, 2];
				addElementsToList(elements);

				expect(() => { myList.remove(5) }).to.throw(Error, 'Index was outside the bounds of the collection.');
			});

			it('should throw when index is larger than the list length', () => {
				let elements = [3, 4, 5, 1, 2];
				addElementsToList(elements);

				expect(() => { myList.remove(6) }).to.throw(Error, 'Index was outside the bounds of the collection.');
			});
		});

		describe('get', () => {
			it('should retrieve an element from a valid index correctly', () => {
				let elements = [3, 4, 5, 1, 2];
				addElementsToList(elements);

				expect(myList.get(0)).to.equal(1);
				expect(myList.get(1)).to.equal(2);
				expect(myList.get(2)).to.equal(3);
				expect(myList.get(3)).to.equal(4);
				expect(myList.get(4)).to.equal(5);
			});

			it('should throw when an attempt to retrieve an index from an empty collection is made', () => {
				expect(() => { myList.get(0) }).to.throw(Error, 'Collection is empty.');
			});

			it('should throw when an attempt to retrieve an element at a negative index is made', () => {
				addElementsToList();
				expect(() => { myList.get(-5) }).to.throw(Error, 'Index was outside the bounds of the collection.');
			});

			it('should throw when an attempt to retrieve an element at a larger index than the list length is made', () => {
				addElementsToList();
				expect(() => { myList.get(5) }).to.throw(Error, 'Index was outside the bounds of the collection.');
			});
		});

		describe('size', () => {
			it('should retrieve size correctly', () => {
				let elements = [3, 4, 5, 1, 2];

				myList.add(5);
				expect(myList.size).to.equal(1);

				myList.add(5);
				expect(myList.size).to.equal(2);

				myList.add(5);
				expect(myList.size).to.equal(3);

				myList.add(5);
				expect(myList.size).to.equal(4);

				myList.add(5);
				expect(myList.size).to.equal(5);
			});
		});
	});
});