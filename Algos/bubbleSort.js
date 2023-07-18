let hasPressedStop = new Boolean(false);

const bubble = async () => {
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        for(let j = 0; j < ele.length-i-1; j++){
            if(hasPressedStop == true){
                return;
            }
            ele[j].style.background = '#8E05C2';
            ele[j+1].style.background = '#8E05C2';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                await delayTime(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = '#C70039';
            ele[j+1].style.background = '#C70039';
        }
        ele[ele.length-1-i].style.background = '#57D131';
    }
    ele[0].style.background = '#57D131';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async () => {
    hasPressedStop = false;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await bubble();
    if(hasPressedStop==true){
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});
