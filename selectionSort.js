var arrayOfIntegers = new Array(5, 3, 4, 2, 6, 9, 7, 8, 1)
//Disadvantages: Too slow for big entries, not stable, always do (n² - n)/2 comparisons
//Easy to implement, doesnt need another array, take up less memory, one of the more fasters to sort small arrays
console.log('Before: ', arrayOfIntegers);
sort(arrayOfIntegers)
console.log('After: ', arrayOfIntegers);

function sort(arr){
    for(let i = 0; i <= arr.length -1; i++){ /*n */
        let minor_index = i;
        for(let j = i + 1; j < arr.length; j++){ /*n */
            if(arr[j] < arr[minor_index]){
                minor_index = j
            }
        }
        if(arr[i] > arr[minor_index]){
            let aux = arr[minor_index]
            arr[minor_index] = arr[i]
            arr[i] = aux
        }
    }
}

// n²