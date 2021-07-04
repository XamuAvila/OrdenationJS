var arrayOfIntegers = new Array(5, 3, 4, 2, 6, 9, 7, 8, 1)
console.log('Before: ', arrayOfIntegers)
sort(arrayOfIntegers)
console.log('After: ', arrayOfIntegers)
function sort(arr){
    for(let i = 1; i < arr.length; i++){
        current = arr[i]
        j = i - 1
        let condition = (j >= 0 && arr[j] > current)
        while(j >= 0 && arr[j] > current){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = current
    }
}