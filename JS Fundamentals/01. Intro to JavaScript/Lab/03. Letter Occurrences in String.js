function countLetterOccurrences(str, letter) {
    let occurrences = str
        .split("")
        .filter(a => a === letter)
        .length;

    return occurrences;
}

console.log(countLetterOccurrences('hello', 'l'));