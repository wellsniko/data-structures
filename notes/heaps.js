//  index i represents a node in the heap

//  the left child of node i can be found at index 2 * i

//  the right child of node i can be found at index 2 * i + 1

// the parent of node i can be found at Math.floor(i / 2)

let heap = [null, 42, 32, 24, 30, 9, 20, 18, 2, 7]


class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }
    
    siftUp(idx) {
        if (idx === 1) return;
        let parentIdx = this.getParent(idx);
        if (this.array[parentIdx] < this.array[idx]) {
            [ this.array[parentIdx], this.array[idx] ] = [ this.array[idx], this.array[parentIdx] ];
            this.siftUp(parentIdx);
        }
    }

        deleteMax() {
        if (this.array.length === 2) return this.array.pop();
        if (this.array.length === 1) return null;

        let max = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);
        return max;
    }

    siftDown(idx) {
        let ary = this.array;
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx); 
        let leftVal = ary[leftIdx];
        let rightVal = ary[rightIdx];

        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;
    
        if (ary[idx] > leftVal && ary[idx] > rightVal) return;
    
        if (leftVal < rightVal) {
          var swapIdx = rightIdx;
        } else {
          var swapIdx = leftIdx;
        }
        [ ary[idx], ary[swapIdx] ] = [ ary[swapIdx], ary[idx] ];

        this.siftDown(swapIdx);
    }
}


function heapSort(array) {
    let heap = new MaxHeap();
    array.forEach(num => heap.insert(num));

    let sorted = [];
    while (heap.array.length > 1) {
        sorted.push(heap.deleteMax());
    }

    return sorted;
}


function heapSort(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        heapify(array, array.length, i);
    }
    // entire array is now a heap

    for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
        // this effecively shrinks the heap by one and grows the sorted array by one
        swap(array, endOfHeap, 0);
        // sift down the new root, but not past the end of the heap
        heapify(array, endOfHeap, 0);
    }
    return array;
}

// swap the elements at indices i and j of array
function swap(array, i, j) {
    [ array[i], array[j] ] = [ array[j], array[i] ];
}


// sift-down the node at index i until max heap property is restored
// n represents the size of the heap
function heapify(array, n, i) {
    let leftIdx = 2 * i + 1;
    let rightIdx = 2 * i + 2;

    let leftVal = array[leftIdx];
    let rightVal = array[rightIdx];

    if (leftIdx >= n) leftVal = -Infinity;
    if (rightIdx >= n) rightVal = -Infinity;

    if (array[i] > leftVal && array[i] > rightVal) return;

    let swapIdx;
    if (leftVal < rightVal) {
        swapIdx = rightIdx;
    } else {
        swapIdx = leftIdx;
    }
    swap(array, i, swapIdx);
    heapify(array, n, swapIdx);
}

