function stringFrom1ToN(num) {
    num = (+num);

    let numbers = [...new Array(num).keys()]
        .map(a => a + 1);

    let concatenatedNumbers = numbers.join('');
    console.log(numbers)
}

stringFrom1ToN('11');