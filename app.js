// swap const to swap array bars
const swap = (element1, element2) => {
    let temp = element1.style.height;
    element1.style.height = element2.style.height;
    element2.style.height = temp;
}

// Disables sorting buttons used in conjunction with enable
const disableSortingBtn = () => {
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".bucketSort").disabled = true;
    document.querySelector(".countingSort").disabled = true;
    document.querySelector(".heapSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
const enableSortingBtn = () => {
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".bucketSort").disabled = false;
    document.querySelector(".countingSort").disabled = false;
    document.querySelector(".heapSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
const disableSizeSlider = () => {
    document.querySelector("#size_input").disabled = true;
}

const disableSpeedSlider = () => {
    document.querySelector("#speed_input").disabled = true;
}

const enableSpeedSlider = () => {
    document.querySelector("#speed_input").disabled = false;
}

// Enables size slider used in conjunction with disable
const enableSizeSlider = () => {
    document.querySelector("#size_input").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
const disableNewArrayBtn = () => {
    document.querySelector(".new").disabled = true;
}

const enableNewArrayBtn = () => {
    document.querySelector(".new").disabled = false;
}

const enableStopSortingBtn = () => {
    document.querySelector(".stop").disabled = false;
}

const disableStopSortingBtn = () => {
    document.querySelector(".stop").disabled = true;
}

// to delay sway to animate sorting (1000ms = 1s)
const delayTime = (lag) => {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, lag);
    })
}

let arraySize = document.querySelector("#size_input");

arraySize.addEventListener('input', () => {
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

let delay = 200;

let delayElement = document.querySelector("#speed_input");

delayElement.addEventListener('input', () => {
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

const deleteChild = () => {
    const bar = document.querySelector("#sorting");
    bar.innerHTML = '';
}

let barArray = [];


const createNewArray = (noOfBars = 60) => {
    deleteChild();
    barArray = []
    
    for (let i = 0; i < noOfBars; i++) {
        barArray.push(Math.floor(Math.random() * 251));
    }
    
    console.log(barArray)
    
    const bars = document.querySelector("#sorting");
    
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${barArray[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

createNewArray();


const newArrayButton = document.querySelector(".new");
newArrayButton.addEventListener("click", () => {
    hasPressedStop = false;
    enableSpeedSlider();
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});

const stopSortingButton = document.querySelector(".stop");
stopSortingButton.addEventListener("click", () => {
    disableSortingBtn();
    disableSizeSlider();
    hasPressedStop = true;
})