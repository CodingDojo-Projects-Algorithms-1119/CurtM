/** Min to Front */

/** Given an array of comparable values, move the lowest element to 
* array’s front, shifting backward any elements previously ahead of it. 
Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5]
 and return it. As always, do this without using built-in functions. */


function min2front(array) {
  //var minValue = array[0];
  //console.log('min', minValue)
  var mindex = 0;
  //find the min value in an array
  for (var index = 1; index < array.length; index++) {
    var currentValue = array[index];

    if (currentValue < array[mindex]) {
      //minValue = currentValue;
      mindex = index;
      console.log('found a new min', mindex);
    }
  }
  return pushFront(array, removeAt(array, mindex));
  //console.log('our min value is' + mindex, array);

  return array;
}

var vals = [23, 65, 1, 756, -9, 7]

console.log(min2front(vals));