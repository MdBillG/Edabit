function minusOne(arr) {
  // Your code here.

  let newArr = arr.slice(); // Create a copy of the array
  newArr.pop(); // Remove the last element from the copied array
  return newArr; // Return the modified copy

 
}

module.exports = minusOne;
