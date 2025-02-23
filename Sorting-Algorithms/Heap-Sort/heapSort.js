function heapifyJs(arr, i, n) {
    let largest = i; // ვიწყებთ მშობლისგან
    let left = 2 * i + 1; // მარცხენა შვილი
    let right = 2 * i + 2; // მარჯვენა შვილი

    // თუ მარცხენა შვილი მეტია, ვანახლებთ largest-ს
    if (left < n && arr[left] > arr[largest]) {
        largest = left
    }

    // თუ მარჯვენა შვილი მეტია, ვანახლებთ largest-ს
    if (right < n && arr[right] > arr[largest]) {
        largest = right
    }

    // თუ largest შეიცვალა, ვცვლით ელემენტებს და ვიმეორებთ პროცესს
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapifyJs(arr, n, largest)
    }
}

function heapSortJs(arr) {
    let n = arr.length;

    // 1. ჰიპის სტრუქტურის შექმნა (Max-Heap)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyJs(arr, n, i);
    }

    // 2. ელემენტების გაცვლა და ჰიპის გადამუშავება
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // ჰიპის ფესვს ვცვლით ბოლო ელემენტთან
        heapifyJs(arr, i, 0); // ხელახლა ვაწყობთ ჰიპს
    }

    return arr;
}

console.log(heapSortJs([5, 2, 9, 1, 5, 6]));
