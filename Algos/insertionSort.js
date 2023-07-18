const insertion = async () => {
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background = '#57D131';
    for(let i = 1; i < ele.length; i++){
        if(hasPressedStop==true){
            return;
        }
        let j = i - 1;
        let key = ele[i].style.height;
        ele[i].style.background = '#8E05C2';

        await delayTime(delay);
        if(hasPressedStop==true){
            return;
        }

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            if(hasPressedStop==true){
                return;
            }
            ele[j].style.background = '#8E05C2';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await delayTime(delay);
            if(hasPressedStop==true){
                return;
            }
            for(let k = i; k >= 0; k--){
                ele[k].style.background = '#57D131';
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = '#57D131';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async () => {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await insertion();
    if(hasPressedStop==true){
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});
