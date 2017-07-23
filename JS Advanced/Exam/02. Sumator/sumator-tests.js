let expect = require('chai').expect;

let Sumator = require('./Sumator');

describe('Sumator Tests', () => {
	let sumator;
	beforeEach(function() {
		sumator = new Sumator();
	});

	describe('Properties', () => {
		it('should have "data"', () => {
			expect(!!sumator.data).to.equal(true);
			expect(sumator.data).to.not.be.undefined;
			expect(sumator.data).to.be.an('Array');
			expect(sumator.data).to.have.length(0);
		});

		it('should have "add"', () => {
			expect(Sumator.prototype).to.haveOwnProperty('add');
			expect(sumator.add).to.be.a('Function');
		});

		it('should have "sumNums"', () => {
			expect(Sumator.prototype).to.haveOwnProperty('sumNums');
			expect(sumator.sumNums).to.be.a('Function');
		});

		it('should have "removeByFilter"', () => {
			expect(Sumator.prototype).to.haveOwnProperty('removeByFilter');
			expect(sumator.removeByFilter).to.be.a('Function');
		});

		it('should have "toString"', () => {
			expect(Sumator.prototype).to.haveOwnProperty('toString');
			expect(sumator.toString).to.be.a('Function');
		});
	});

	describe('Functions', () => {
		describe('add', () => {
			it('should add a single item to the list', () => {
				sumator.add(1);
				expect(sumator.data).to.have.length(1);
				expect(sumator.data[0]).to.equal(1);
			});

			it('should add multiple items to the list', () => {
				sumator.add(2);
				sumator.add('3');
				sumator.add(1);
				expect(sumator.data).to.have.length(3);
				expect(sumator.data[0]).to.equal(2);
				expect(sumator.data[1]).to.equal('3');
				expect(sumator.data[2]).to.equal(1);
			});
		});

		describe('sumNums', () => {
			it('should sum a single numerical item', () => {
				sumator.add(1);

				let result = sumator.sumNums();

				expect(result).to.equal(1);
			});

			it('should sum multiple numerical items', () => {
				sumator.add(1);
				sumator.add(2);
				sumator.add(3);
				sumator.add(4);
				sumator.add(5);

				let result = sumator.sumNums();

				expect(result).to.equal(1 + 2 + 3 + 4 + 5);
			});

			it('should return 0 with a single non-numeric type item', () => {
				sumator.add('not a number!');

				let result = sumator.sumNums();

				expect(result).to.equal(0);
			});

			it('should sum multiple mixed-type items', () => {
				sumator.add(1);
				sumator.add(2);
				sumator.add('ohoho');
				sumator.add(4);
				sumator.add('5');

				let result = sumator.sumNums();

				expect(result).to.equal(1 + 2 + 4);
			});

			it('should return 0 when data is empty', () => {
				let result = sumator.sumNums();

				expect(result).to.equal(0);
			});

			it('should return 0 when data consists entirely of non-numeric items', () => {
				sumator.add('1');
				sumator.add('2');
				sumator.add('3');
				sumator.add('one');
				sumator.add('two');
				sumator.add('three');

				let result = sumator.sumNums();

				expect(result).to.equal(0);
			});

			it('should return 0 when data consists entirely of numbers, stored as string', () => {
				sumator.add('1');
				sumator.add('2');
				sumator.add('3');

				let result = sumator.sumNums();

				expect(result).to.equal(0);
			});
		});

		describe('removeByFilter', () => {
			it('should remove even numbers', () => {
				sumator.add(1);
				sumator.add(2);
				sumator.add(3);
				sumator.add(4);
				sumator.add(5);

				sumator.removeByFilter(item => item % 2 === 0);

				expect(sumator.data[0]).to.equal(1);
				expect(sumator.data[1]).to.equal(3);
				expect(sumator.data[2]).to.equal(5);
			});

			it('should remove all numbers', () => {
				sumator.add(1);
				sumator.add(2);
				sumator.add('this');
				sumator.add('test');
				sumator.add('passed');
				sumator.add(3);
				sumator.add(4);
				sumator.add(5);

				sumator.removeByFilter(item => typeof(item) === 'number');

				expect(sumator.data[0]).to.equal('this');
				expect(sumator.data[1]).to.equal('test');
				expect(sumator.data[2]).to.equal('passed');
			});
		});

		describe('toString', () => {
			it('should return ", "-separated elements when there are any', () => {
				sumator.add(1);
				sumator.add(2);
				sumator.add('this');
				sumator.add('test');
				sumator.add('passed');
				sumator.add(3);
				sumator.add(4);
				sumator.add(5);

				let result = sumator.toString();
				expect(result).to.equal('1, 2, this, test, passed, 3, 4, 5');
			});

			it('should return (empty) when collection is empty', () => {
				let result = sumator.toString();
				expect(result).to.equal('(empty)');
			});

			it('should return (empty) when something gets added, then removed', () => {
				sumator.add(5);

				sumator.removeByFilter(item => typeof(item) === 'number');

				let result = sumator.toString();
				expect(result).to.equal('(empty)');
			});
		});
	});
});