function compoundInterest([principalSum, interestRatePercent, compoundingPeriodMonths, timespanYears]) {
	let P = principalSum;
	let i = interestRatePercent / 100;
	let n = 12 / compoundingPeriodMonths;
	let t = timespanYears;

	let compoundInterest = P * (1 + i / n) ** (n * t);
	return compoundInterest;
}

console.log(compoundInterest([1500, 4.3, 3, 6]));
console.log(compoundInterest([100000, 5, 12, 25]));
