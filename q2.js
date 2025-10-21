// 2. Find the largest number in an array (using a loop)
function findLargest(array) {
    let largest = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

// Test for find largest
let testArray2 = [1, 4, 5, 4, 3]; // 5
let largest = findLargest(testArray2);

// TODO: display the largest number in the array in the console
console.log(largest);