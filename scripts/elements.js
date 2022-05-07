const tabText = document.querySelectorAll('.text'),
    tabImg = document.querySelectorAll('.tabImg'),
    tabParent = document.querySelector('.tabText');

const hideTabs = () => {
    tabImg.forEach(img => {
        img.style.display = 'none';
    });
    tabText.forEach(text => {
        text.classList.remove('active');
    })
}

const showTabs = (i = 0) => {
    tabImg[i].style.display = 'block';
    tabText[i].classList.add('active');
}

hideTabs();
showTabs();

tabParent.addEventListener('click', (event) => {
    const target = event.target;

    if(target.classList.contains('text')){
        tabText.forEach((item, index) => {
            if(item === target){
                hideTabs();
                showTabs(index)
            }
        })
    }
});


