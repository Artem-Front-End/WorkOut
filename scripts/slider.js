const sliderImg = document.querySelectorAll('.sliderLine img'),
    sliderLine = document.querySelector('.sliderLine');

let count = 0;
let width;

const rollSlider = () => {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

const init = () => {
    width = document.querySelector('.slider').offsetWidth / 3;
    sliderLine.style.width = width  * sliderImg.length + 'px';
    sliderImg.forEach(img => {
        img.style.width = width + 'px';
        img.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.sliderPrev').addEventListener('click', () => {
    count--;
    if(count < 0){
        count =sliderImg.length - 1;
    }

    rollSlider()
});

document.querySelector('.sliderNext').addEventListener('click', () => {
    count++;
    if(count > sliderImg.length - 1){
        count = 0;
    }

    rollSlider()
})