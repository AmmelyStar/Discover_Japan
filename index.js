(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50){
            header.classList.add('header_activ');
        } else{
            header.classList.remove('header_activ');
        }
    };
}());

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav_close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    })
} ());