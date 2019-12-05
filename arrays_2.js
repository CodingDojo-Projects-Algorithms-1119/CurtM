
/** Rotate
Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s
 values to the right by that amount. ‘Wrap-around’ any values that shift off 
 array’s end to the other side, so that no data is lost. Operate in-place: 
 given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.

Second: allow negative shiftBy (shift L, not R).
Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
Fourth: minimize the touches of each element. **/


function rotate(array, shiftBy) {
  console.log(array, shiftBy);

  while (shiftBy < 0) {
    shiftBy += array.length;
  }
  shiftBy = shiftBy % array.length;
  console.log('shifting by' , shiftBy); < shiftBy; index++) {
    console.log('rotating x times')
  }

  for (var index=0; index)
}

console.log(rotate(arr, 11);



/**Reverse
 * Given a numerical array, reverse the order of values, in-place. The reversed array 
 * should have the same length, with existing elements moved to other indices so that 
 * order of elements is reversed. Working ‘in-place’ means that you cannot use a second
 *  array – move values within the array that you are given. As always, do not use built-in 
 * array functions such as splice().
 */


function reverse(arr) {
  for (var i=0; i < array.length / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
  }
  return arr;
}
console.log(reverse);


 /** Concat
  * Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. 
  * Return a new array containing the first array’s elements, followed by the second array’s 
  * elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should 
  * return new array ['a','b',1,2].
  */


var newArray = []
function newPush (arr) {
  for (var i=0; i < arr.length; i++) {
    newPush.push(arr[i])
  }
  return arr;
}

function newPush(arrz, arry) {
  newPush(arrz);
  newPush(arry);
  return(arrx)
}
console.log(newPush)

/*having an issue with this one - will circle back after graduation and attempt to complete in algorithm sessions

  
/** Skyline Heights
 * Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are 
 * given an array with heights of consecutive buildings, starting closest to you and 
 * extending away. Array [-1,7,3] would represent three buildings: first is actually out 
 * of view below street level, behind it is second at 7 stories high, third is 3 stories 
 * high (hidden behind the 7-story). You are situated at street level. Return array 
 * containing heights of buildings you can see, in order. Given [-1,1,1,7,3] 
 * return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in
 * array functions such as unshift().
 */