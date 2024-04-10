'use strict';

const cl = console.log;

// Convoluted JavaScript with intentional bugs for debugging
const data = [
  { id: 1, value: 'A' },
  { id: 2, value: 'B' },
  { id: 3, value: 'C' }
];

function displayResult (result) {
  cl(result + ', ');
}

function transformData (item) {
  // Bug: Incorrect property name in the next line
  const transformedValue = item.value + '_transformed';
  return transformedValue;
}

function processData () {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (item) {
      const result = transformData(item);
      displayResult(result);
    }
  }
}

// Call the main function
processData();
