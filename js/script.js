
// menu
const burger = document.querySelector('.burger');
const menuAll = document.querySelector('.personal-area__leftblock-top__content');
burger.addEventListener("click", function(){
    menuAll.classList.toggle('active');
    burger.classList.toggle('active');
});
// menu
// popap
const popap = document.querySelector('.popap');
const popapClose = document.querySelectorAll('.popap__close');
const popapBtns = document.querySelectorAll('.popap__btn');
const popapBlocks = document.querySelectorAll('.popap__block');

popapBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        popapBlocks.forEach((el) => {
            el.classList.remove('active');
        });

        popap.classList.add('active');
        document.querySelector(`[data-popap="${path}"]`).classList.add('active');
    });
});

popapClose.forEach((el) => {
    el.addEventListener("click", function(){
        popap.classList.remove('active');
        popapBlocks.forEach((el) => {
            el.classList.remove('active');
        });
    });
});

popap.addEventListener('click', (e) => {
    if (e.target == popap) {
        popap.classList.remove('active');
        popapBlocks.forEach((el) => {
            el.classList.remove('active');
        });
    }
});
// popap