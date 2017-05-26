function isPalindrome(str) {
	let isPalindrome = str === str.split('').reverse().join('');
	return isPalindrome;
}

console.log(isPalindrome('haha'));

console.log();
console.log(isPalindrome('racecar'));

console.log();
console.log(isPalindrome('unitinu'));