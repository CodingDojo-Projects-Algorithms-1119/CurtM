/** Push Front*/
/**Given an array and an additional value, insert this value at the beginning 
of the array. Do this without using any built-in array methods. */

var values = [1, 2, 3, 4, 5, 6, 7, 10];

function pushFront(array, value) {
  for (var index = array.length; index > 0; index--) {
    var currentValue = array[index-1];
    array[index] = currentValue;
    console.log(array);
  }

  array[0] = value;

  return array;
}

console.log(pushFront(values, 99));

console.log('values', values);


/** Pop Front */
/** Given an array, remove and return the value at the beginning of the array. 
 * Do this without using any built-in array methods except pop().*/

function popFront(array) {
  var returnValue = array[0];

  for (var index = 1; index < array.length; index++) {
    var currentValue = array[index];
    array[index - 1] = currentValue;

    console.log(array)
  }

  array.pop();
  console.log(array);

  return returnValue;
}

console.log(popFront(values));




/** Insert At */
/**Given an array, index, and additional value, insert the value into array at given index. 
 * Do this without using built-in array methods. You can think of pushFront(arr,val) as
 *  equivalent to insertAt(arr,0,val). */

function insertAt(array, position, value) {
  for (var index = array.length; index > position; index --) {
    var currentValue = array[index - 1];
    array[index] = currentValue;

    console.log(array);
  }

  array[position] = value;

  return array;
}

console.log(insertAt(values, 5, 999));



/** Remove At */
/** Given an array and an index into array, remove and return the array value at that index. 
 * Do this without using built-in array methods except pop(). Think of popFront(arr) as 
 * equivalent to removeAt(arr,0). */

function removeAt(array, position) {
  var returnValue = array[position];

  console.log('before', array);

  for (var index = position; index < array.length; index++) {
    var currentValue = array[index + 1];
    array[index] = currentValue;
  }

  array.pop();
  console.log('removeAt', array);

  return returnValue;
}

console.log(removeAt(values, 3));



/** Swap Pairs */
/**Swap positions of successive pairs of values of given array. If length is odd, do not 
 * change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input 
 * ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without
 *  using any built-in array methods. */




 /** Remove Duplicates */
 /**Sara is looking to hire an awesome web developer and has received applications from various
  *  sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, 
  * remove duplicate values. Because array elements are already in order, all duplicate values 
  * will be grouped together. As with all these array challenges, do this without using any 
  * built-in array methods.

/** Second: Solve this without using any nested loops */






