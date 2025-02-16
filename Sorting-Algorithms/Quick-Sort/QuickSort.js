function quickSortJs(arr){
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1]; // უკანასკნელი ელემენტი როგორც პივოტი
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSortJs(left), pivot, ...quickSortJs(right)];
}

console.log(quickSortJs([5, 2, 9, 1, 5, 6])); 