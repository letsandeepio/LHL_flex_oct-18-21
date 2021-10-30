const input = process.argv.slice(2); //hell

if(input.length < 2) {
  console.log('Please enter atleast 2 arguments');
   process.exit();
}

const convertToNumber = () => {
const numberOutput = [];
for (let i = 0; i < input.length; i++) {
  numberOutput.push(Number(input[i]));
}
return numberOutput;
}

const checkForNumber = (numberArray) => {
  for (const number of numberArray) {
    if(isNaN(number)){
      console.log('Please provide valid numbers');
      process.exit();
    }
  }
}

const isWholeNumber = (numberArray) => {
  const finalNumbersArray = []
  for (const number of numberArray) {
    if(Number.isInteger(number)){
      finalNumbersArray.push(number)
    }
  }
  return finalNumbersArray;
}

const sum = (arrayToSum) => {
  let sum = 0;
  for (const number of arrayToSum) {
    sum = sum + number;
  }
  return sum;
}


const convertedNumbers = convertToNumber();
checkForNumber(convertedNumbers);
const finalNumbersArray = isWholeNumber(convertedNumbers);
const sumTotal = sum(finalNumbersArray);

console.log(`The sum is ${sumTotal}`);

