


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[0];
    const lesser = []
    const greater = []

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            lesser.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }
    return quickSort(lesser).concat(pivot, quickSort(greater));
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
