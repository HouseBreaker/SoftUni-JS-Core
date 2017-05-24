function sumAndVat(numbers) {
    let sum = numbers.reduce((a, b) => a + b);
    let vat = sum * 0.2;
    let total = sum + vat;

    return [sum, vat, total];
}

console.log(sumAndVat([1.20, 2.60, 3.50]));