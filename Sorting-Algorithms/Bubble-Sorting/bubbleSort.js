//------------------------------------------------//
//Sorting
//Bubble Sorting
function bubbleSortJs(arr){
    let n = arr.length
    for (let i = 0; i < n -1; i++){ //გარე ციკლი
        for (let j =0; j < n- 1; j++){ //შიდა ციკლი
            if (arr[j] > arr[j + 1]) { //თუ ელემენტები არ არის სწორად დალაგებული
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

console.log(bubbleSortJs([5, 2, 9, 7, 6, 8]))