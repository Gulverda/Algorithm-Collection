function insertionSortTs(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) { // ვიწყებთ მეორე ელემენტიდან
        let key = arr[i];  // ვირჩევთ უცნობ ელემენტს
        let j = i - 1;

        while (j >= 0 && arr[j] > key) { // სანამ წინა ელემენტი მეტია, ვწევთ მას მარჯვნივ
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key; // ჩავსვამთ ელემენტს სწორ ადგილას
    }
    return arr;
}

console.log(insertionSortTs([5, 2, 9, 1, 5, 6]));