 // 1.Crie uma função que receba um número e retorne seu fatorial.
 /* function factorial (number) {
    let result = 1;
 } */

 const factorial = number => {
    let result = 1;
    for (let i = 2; i <= number; i += 1 ) { 
        result *= i;
    }
    return result;
}
console.log(factorial(4));

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra
const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

