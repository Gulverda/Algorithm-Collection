function quickSortTs(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1]; // უკანასკნელი ელემენტი როგორც პივოტი
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSortTs(left), pivot, ...quickSortTs(right)];
}

console.log(quickSortTs([5, 2, 9, 1, 5, 6])); 