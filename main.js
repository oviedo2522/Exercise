///Write an algorithm that checks if a string contains another string

function contains(substring, string) {
    return string.includes(substring);
}

console.log(contains("Hellow", "Hello, World!")); // true
console.log(contains("Bye", "Hello, World!")); // false


///Write a recursive function that takes in a number and returns the sum of the numbers from 0 to the number.

function sum(num) {
    if (num === 0) {
        return 0;
    }

    return num + sum(num - 1);
}

console.log(sum(5)); // 15


// Write a function that takes in a string and returns the string reversed.

function reverseString(string) {
    return string.split('').reverse().join('');
}

console.log(reverseString("Hello, World!")); // !dlroW ,olleH


//Write a recursive function that takes in a list of strings and returns the words capitalized.

function capitalizeWords(words) {
    if (words.length === 0) {
        return [];
    }

    return [words[0].toUpperCase(), ...capitalizeWords(words.slice(1))];
}

console.log(capitalizeWords(["hello", "world"])); // ["HELLO", "WORLD"]


// Write a function that takes in a list of numbers and returns the product of the numbers in the list.

function product(numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}   

console.log(product([1, 2, 3, 4])); // 24


// Write an algorithm that prints the non-repeating integers in a list.

function nonRepeatingIntegers(numbers) {
    const count = {};

    for (let num of numbers) {
        count[num] = count[num] + 1 || 1;
    }

    return numbers.filter(num => count[num] === 1);
}

console.log(nonRepeatingIntegers([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]