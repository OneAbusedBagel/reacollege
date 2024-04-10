'use strict';

const cl = console.log;

const multiArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Bug: Missing condition in the inner loop
for (let i = 0; i < multiArray.length; i++) {
  for (let j = 0; j < multiArray[i].length; ) {
    cl(multiArray[i][j]);
  }
}
