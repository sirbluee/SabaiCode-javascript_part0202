function numbersSort(numbers) {
  let n = numbers.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (numbers[i - 1] > numbers[i]) {
        let temp = numbers[i - 1];
        numbers[i - 1] = numbers[i];
        numbers[i] = temp;
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return numbers;
}

const numbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = numbersSort(numbers);
console.log(sortedNumbers); 