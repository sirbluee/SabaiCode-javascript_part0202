const CalculateAverage = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

    return sum / numbers.length;
  }
};
let numbers = [10, 20, 30, 40, 50];
let average = CalculateAverage(numbers);
console.log(`Average: ${average}`);
