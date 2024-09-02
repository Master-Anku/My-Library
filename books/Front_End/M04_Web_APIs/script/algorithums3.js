// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    
    let total = 0; // Initialize the total to 0
    for (let i = 0; i < arr.length; i++) { // Loop through each element in the array
      total += arr[i]; // Add the current element to the total
    }
    return total; // Return the total sum
  
};



// Example usage:
// var arr = [3, 1, 5, 6];
// console.log(sumArray(arr)); // Output should be 15