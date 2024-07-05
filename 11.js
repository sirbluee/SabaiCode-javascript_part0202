function countVowels (str){
    let countVowels = 0;
    const vowels = "aeiuo";
    str = str.toLowerCase();
    for(let char of str){
        if(vowels.includes(char)){
            vowelsCount++;
        }
    }
    return countVowels;
}

const inputString = "Hello world";
const results = vowelsCount(inputString);
console.log(results);