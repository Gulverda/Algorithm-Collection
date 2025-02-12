function mergeSortJs(arr) {
    if (arr.length <= 1) {
        return arr
    } 

    const mid = Math.floor(arr.length / 2);
    const left = mergeSortJs(arr.slice(0, mid));
    const right = mergeSortJs(arr.slice(mid));

    return mergeJs(left, right);
}

function mergeJs(left, right) {
    let result = [], i = 0, j = 0;

    while (i < left.length && j < right.length){
        if (left[i] < right[j]){
            result.push(left[i]);
            i++
        } else {
            result.push(right[j]);
            j++
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSortJs([1,4,6,2,5,12,7]))