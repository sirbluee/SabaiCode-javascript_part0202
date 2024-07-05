function countVowels(str) {
  str = str.toLowerCase();
  let vowelCount = 0;
  const vowels = "aeiou";
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
}

const inputString = "Hello World!";
const result = countVowels(inputString);
console.log(`Number of Vowels: ${result}`);
