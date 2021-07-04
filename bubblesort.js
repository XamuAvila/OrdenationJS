var arrayOfIntegers = new Array(5, 3, 4, 2, 6, 9, 7, 8, 1)
// Motives to use this method: When the array is almost sorted
//Why to NOT use: Too Slow when the input is too big
// Entries: Array and the Length of it
console.log('Before: ', arrayOfIntegers.toString())
sort(arrayOfIntegers)
console.log('After: ', arrayOfIntegers.toString())

function sort(arr) {
    let length = arr.length
    for (let j = 0; j <= length; j++) { /* n*/
        for (let i = 0; i < length; i++) { /* n */
            if (arr[i] > arr[i + 1]) {
                let aux = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = aux
            }
        }
    }
}
// n²
