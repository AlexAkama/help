'use strict';

let tabContents = document.querySelectorAll('.tab-content'),
    tabs = document.querySelectorAll('.header-tab'),
    header = document.querySelector('.header'),
    content = document.querySelector('.content');
let tabPosition,
    selectedColor = '#c78030';

function hideTabContent() {
    let i = 0;
    tabContents.forEach(element => {
        element.classList.add('hide');
        tabs[i++].style.color = '';
    });
}
hideTabContent();

function showTabContent(i) {
    tabContents[i].classList.remove('hide');
    tabs[i].style.color = selectedColor;
    tabPosition = i;
}
showTabContent(0);

header.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('header-tab')) {
        for (let i = 0; i < tabs.length; i++) {
            if (target == tabs[i]) {
                hideTabContent();
                showTabContent(i);
                break;
            }
        }
    }
});

// Swipe
let position = 0,
    offset = 0,
    swipeRange = 200;
content.addEventListener('touchstart', function (event) {
    position = event.changedTouches[0].pageX;
});
content.addEventListener('touchend', function (event) {
    offset = event.changedTouches[0].pageX - position;
    if (Math.abs(offset) > swipeRange) {
        swipe(offset);
    }
});

function swipe(offset) {
    tabPosition += Math.sign(offset);
    if (tabPosition < 0) {
        tabPosition = tabContents.length - 1;
    } else if (tabPosition > tabContents.length - 1) {
        tabPosition = 0;
    }
    hideTabContent();
    showTabContent(tabPosition);
}