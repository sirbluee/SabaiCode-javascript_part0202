function countVowels (str){
    let numbersVowels = 0;
    const vowels = "aeiuo";
    str = str.toLowerCase();
    for(let char of str){
        if(vowels.includes(char)){
            numbersVowels++;
        }
    }
    return numbersVowels;
}

const inputString = "Hello world";
const results = countVowels(inputString);
console.log(results);