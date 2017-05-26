function sumArgs(num1, num2, num3) {
    let args = [].slice.call(arguments);
    let sum = args.reduce((a, b) => a + b);

    return sum;
}

console.log(sumArgs(1, 2, 3));