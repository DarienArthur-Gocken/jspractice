// 3. Remove duplicates from an array (using a loop). FYI: array.includes(element) checks if an element is in an array
function removeDuplicates(array) {
    let dedupedArray = [];

    for(let i = 0; i < array.length; i++) {
        let element = array[i];
        if(!dedupedArray.includes(element)) {
            dedupedArray.push(element);
        }
    }
    return dedupedArray;
}

// Test for remove duplicates

let testArray3 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]
let dedupedArray = removeDuplicates(testArray3);

// TODO: display the array with duplicates removed in the console
console.log(dedupedArray);