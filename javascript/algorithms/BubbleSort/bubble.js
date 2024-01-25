

function bubblesort(arr) {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + i];
                arr[j + i] = temp;
            }
        }
    }
    return arr;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubblesort(unsortedArray);
console.log(sortedArray);
