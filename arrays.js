var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function accessElementInArray (array , index ) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray (array) {
  return array.slice(0);
}
