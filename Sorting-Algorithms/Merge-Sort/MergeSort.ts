function mergeSortTs(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSortTs(arr.slice(0, mid));
    const right = mergeSortTs(arr.slice(mid));

    return mergeTs(left, right);
}

function mergeTs(left: number[], right: number[]): number[] {
    let result: number[] = [], i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSortTs([5, 2, 9, 1, 5, 6])); 