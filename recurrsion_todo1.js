// function callSelf() {
//     callSelf();
// }

// callSelf();


function printArrNormal(array) {
    for (let index = 0; index < array.length; index++)
      console.log(`array value is ${ array[index] } at position ${index}`);
}

function printValues(array, index = 0) {
  if (index >= array.length) {
    console.log('hit base case');
    return;
  }
}

printValues(array, index + 1);
console.log(`array value is ${ array[index] } at position ${index}`);

index++;


const arr = [10, 9, 87, 6, 4, 43, 3, 2];



/**
 * Recursive Sigma
Write a recursive function that given a number returns the sum of integers from 1 to that number.
Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
 */


function sigma(n) {
  let sum = 0

  for (let index = 1; index <= n; index++) {
    sum += index;
  }

  return sum;
}
// console.log(sigma(5));

function rSigma(n, index = 1) {
  if (index > n) {
    console.log('hit base ' + index)
    return index;
  }

  const returnedValue = rSigma(n, index + 1);
  console.log(`index is ${index} and n is ${n} and r ${returnedValue}`);

  return returnedValue + index;
}

function rSigma2(n) {
  if (n <=0) {
    console.log('hit base');
    return 0;
  }
//   console.log(`n is ${n}`);
//   rSigma2(n-1) + n;

//   console.log(`n is ${n} and v {v}`);
//   return v;
  return rSigma2(n-1) + n;
}

console.log(rSigma(5));




/**Recursive Factorial
Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6). */


function rFact(n) {
  if (n <=1) {
    return 1;
  }

  console.log(`n is ${n}`);

  return rFact(n-1) * Math.floor(n);
}

console.log(rFact(6.5));