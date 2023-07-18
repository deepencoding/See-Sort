// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
const heapify = async (arr, n, i) => {
    if(hasPressedStop == true){
        return;
    }
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    
    if (l < n && parseInt(arr[l].style.height) > parseInt(arr[largest].style.height)) {
        // arr[l].style.background = 'lightblue'; 
        // arr[largest].style.background = 'cyan';
        largest = l;
        swap(arr[largest], arr[l]);
        // arr[l].style.background = '#e43f5a';
    }
    

    // If right child is larger than largest so far
    if (r < n && parseInt(arr[r].style.height) > parseInt(arr[largest].style.height)) { 
        // arr[r].style.background = 'lightgreen';
        // arr[largest].style.background = 'cyan'; 
        largest = r;
        swap(arr[largest], arr[r]);
        // arr[l].style.background = '#e43f5a'; 
    }

    // If largest is not root
    if (largest != i) {
        var temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        swap(arr[i], arr[largest]);

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

heapSort = async (arr, n) => {
    for (var i = n / 2 - 1; i >= 0; i--) {
        if(hasPressedStop == true){
            return;
        }
        await heapify(arr, n, i);
    }

    for (var i = n - 1; i > 0; i--) {
        if(hasPressedStop == true){
            return;
        }
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        arr[0].style.background = '#8E05C2';
        arr[i].style.background = '#57D131';
        swap(arr[0], arr[i]);
        await delayTime(delay);

        await heapify(arr, i, 0);
    }
}


const heapSortbtn = document.querySelector(".heapSort");
heapSortbtn.addEventListener("click", async () => {
    let arr = document.querySelectorAll('.bar');
    let n = arr.length;

    hasPressedStop = false;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await heapSort(arr, n);
    arr[0].style.background = '#57D131';
    if (hasPressedStop == true) {
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});
