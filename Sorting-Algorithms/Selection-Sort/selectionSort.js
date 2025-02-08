function selectionSorts(arr){
    let n = arr.length

    for (let i = 0; i < n- 1; i++){
        let minIndex = i;

        // ვეძებთ მინიმალურ ელემენტს
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // თუ მინიმალური ელემენტი არ არის პირველ პოზიციაზე, ვცვლით
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr
}

console.log(selectionSorts([5, 2, 9, 1, 5, 6])); 
