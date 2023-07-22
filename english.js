window.onload = init;

function init() {
    teacherCarousel();
    reviewsCarousel();
    navbar();
};

function teacherCarousel() {
    let carousel = document.querySelector('.teacher__carousel'),
        arrowLeft = carousel.querySelector('.teacher__arrow_left'),
        arrowSvgLeft = carousel.querySelector('.teacher__arrowSvg_left'),
        arrowRight = carousel.querySelector('.teacher__arrow_right'),
        arrowSvgRight = carousel.querySelector('.teacher__arrowSvg_right'),
        inner = carousel.querySelector('.teacher__inner'),
        slides = inner.querySelectorAll('.teacher__slide'),
        widthSlide = slides[0].offsetWidth,
        counter = 1,
        position = 0;

        arrowLeft.style.display = 'none';

        carousel.addEventListener('click', (event) => {
            if(event.target == arrowRight || event.target == arrowSvgRight) {
            position -= widthSlide;
            inner.style.transform = `translateX(${position}px)`;
            ++counter;
            if (counter == 2) {
            arrowLeft.style.display = '';
            } 
            if (counter == slides.length) {
            arrowRight.style.display = 'none';
             } 
            }
            if(event.target == arrowLeft || event.target == arrowSvgLeft) {
            position += widthSlide;
            inner.style.transform = `translateX(${position}px)`;
            --counter;
            if (counter == 1) {
             arrowLeft.style.display = 'none';
            }  
            if (counter == slides.length - 1) {
             arrowRight.style.display = '';
             } 
            }
        });
    
}
function reviewsCarousel() {
    let carousel = document.querySelector('.reviews__carousel'),
        arrowLeft = carousel.querySelector('.reviews__arrow_left'),
        arrowRight = carousel.querySelector('.reviews__arrow_right'),
        inner = carousel.querySelector('.reviews__inner'),
        slides = inner.querySelectorAll('.reviews__slide'),
        widthSlide = slides[0].offsetWidth,
        counter = 1,
        position = 0;

        arrowLeft.style.display = 'none';

        carousel.addEventListener('click', (event) => {
            if(event.target == arrowRight) {
            position -= widthSlide;
            inner.style.transform = `translateX(${position}px)`;
            ++counter;
            if (counter == 2) {
            arrowLeft.style.display = '';
            } 
            if (counter == slides.length) {
            arrowRight.style.display = 'none';
             } 
            }
            if(event.target == arrowLeft) {
            position += widthSlide;
            inner.style.transform = `translateX(${position}px)`;
            --counter;
            if (counter == 1) {
             arrowLeft.style.display = 'none';
            }  
            if (counter == slides.length - 1) {
             arrowRight.style.display = '';
             } 
            }
        });
    
}
function navbar() {
    let menu = document.getElementById('burger-menu');
    let menuClose = document.getElementById('burger-menu-close');
    let menuOpen = document.getElementById('burger-menu-open');
    let navList = document.querySelector('.nav__list');
    
    
    if (menuOpen) {
        menuOpen.addEventListener('click', function() {
            if (menu) {
                menu.setAttribute('data-open', '');
                document.body.setAttribute('data-open', '');
            }
        });
    }
    
    if (menuClose) {
        menuClose.addEventListener('click', function() {
            if (menu) {
                menu.removeAttribute('data-open');
                document.body.removeAttribute('data-open');
            }
        });
    }
    
    if(navList) {
        navList.addEventListener('click', (e)=> {
            if(e.target.tagName == 'LI' || e.target.tagName == 'A' ) {
                menu.removeAttribute('data-open');
                document.body.removeAttribute('data-open');
            }
        })
    }
    
};