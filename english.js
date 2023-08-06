window.onload = init;

function init() {
    courseCarousel();
    teacherCarousel();
    reviewsCarousel();
    navbar();
    up();
    modalCourse()
}
function courseCarousel() {
    let carousel = document.querySelector('.course__wrap'),
        arrowLeft = carousel.querySelector('.course__arrow_left'),
        arrowSvgLeft = carousel.querySelector('.course__arrowSvg_left'),
        arrowUseLeft = document.getElementById('useArrowLeft'),
        arrowRight = carousel.querySelector('.course__arrow_right'),
        arrowSvgRight = carousel.querySelector('.course__arrowSvg_right'),
        arrowUseRight = document.getElementById('useArrowRight'),
        inner = carousel.querySelector('.course__inner'),
        slides = inner.querySelectorAll('.course__slide'),
        buttons = document.querySelectorAll('.switch__button'),
        buttonRings = document.querySelectorAll('.switch__ring');
        widthSlide = slides[0].offsetWidth,
        counter = 1,
        position = 0;
        arrowLeft.style.display = 'none';
        buttons[0].style.color = '#34BC5A';
        buttonRings[0].style.backgroundColor = '#34BC5A';

        for (let i = 0; i < buttons.length;i++) { // switch buttons
            buttons[i].addEventListener('click',() => {
                position = -(widthSlide * i);
                counter = i + 1;
                inner.style.transform = `translateX(${position}px)`;
                for(let i = 0; i < buttons.length;i++) {
                    buttons[i].style.color = '';
                    buttonRings[i].style.backgroundColor = '';
                }
                if(counter == 1) {
                    arrowLeft.style.display = 'none';
                    arrowRight.style.display = '';
                    buttons[i].style.color = '#34BC5A';
                    buttonRings[i].style.backgroundColor = '#34BC5A';
                } else if(counter == 2 || counter == 3) {
                    arrowLeft.style.display = '';
                    arrowRight.style.display = '';
                    buttons[i].style.color = '#34BC5A';
                    buttonRings[i].style.backgroundColor = '#34BC5A';
                } else if(counter == 4) {
                    arrowLeft.style.display = '';
                    arrowRight.style.display = 'none';
                    buttons[i].style.color = '#34BC5A';
                    buttonRings[i].style.backgroundColor = '#34BC5A';
                }
             }) 
        }

        carousel.addEventListener('click', (event) => { // arrow
            if(event.target == arrowRight || event.target == arrowSvgRight || event.target == arrowUseRight ||
               event.target == arrowLeft || event.target == arrowSvgLeft || event.target == arrowUseLeft) {
                for(let i = 0; i < buttons.length;i++) {
                    buttons[i].style.color = '';
                    buttonRings[i].style.backgroundColor = '';
                }
               }
            if(event.target == arrowRight || event.target == arrowSvgRight || event.target == arrowUseRight) {
            position -= widthSlide;
            inner.style.transform = `translateX(${position}px)`;
            ++counter;
            if (counter == 2) {
            arrowLeft.style.display = '';
            buttons[1].style.color = '#34BC5A';
            buttonRings[1].style.backgroundColor = '#34BC5A';
            } 
            if (counter == 3) {
                buttons[2].style.color = '#34BC5A';
                buttonRings[2].style.backgroundColor = '#34BC5A';
                } 
            if (counter == slides.length) {
                arrowRight.style.display = 'none';
                buttons[3].style.color = '#34BC5A';
                buttonRings[3].style.backgroundColor = '#34BC5A';
             } 
            }
            if(event.target == arrowLeft || event.target == arrowSvgLeft || event.target == arrowUseLeft) {
            position += widthSlide;
            inner.style.transform = `translateX(${position}px)`;
            --counter;
            if (counter == 1) {
                arrowLeft.style.display = 'none';
                buttons[0].style.color = '#34BC5A';
                buttonRings[0].style.backgroundColor = '#34BC5A';
            } 
            if (counter == 2) {
                buttons[1].style.color = '#34BC5A';
                buttonRings[1].style.backgroundColor = '#34BC5A';
                } 
            if (counter == slides.length - 1) {
                arrowRight.style.display = '';
                buttons[2].style.color = '#34BC5A';
                buttonRings[2].style.backgroundColor = '#34BC5A';
             } 
            }
        });
    
}
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
        arrowSvgLeft = carousel.querySelector('.reviews__arrowSvg_left'),
        arrowRight = carousel.querySelector('.reviews__arrow_right'),
        arrowSvgRight = carousel.querySelector('.reviews__arrowSvg_right'),
        inner = carousel.querySelector('.reviews__inner'),
        slides = inner.querySelectorAll('.reviews__slide'),
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
function up() {
    let header = document.getElementById('header'),
        divUp = document.getElementById('up'),
        heightHeader =  header.offsetHeight; 
        
    if(document.body.offsetWidth > 575) {
        window.addEventListener('scroll', function() {
            if(window.pageYOffset > heightHeader) { 
                divUp.style.display = 'block';
            };
            if(window.pageYOffset < heightHeader) {
                divUp.style.display = 'none';
            };            
            });
    }
};
function modalCourse() {
    let card1 = document.getElementById('card1'),
        card2 = document.getElementById('card2'),
        card3 = document.getElementById('card3'),
        card4 = document.getElementById('card4'),
        hiddenCard1 = document.getElementById('hidden-card1'),
        hiddenCard2 = document.getElementById('hidden-card2'),
        hiddenCard3 = document.getElementById('hidden-card3'),
        hiddenCard4 = document.getElementById('hidden-card4'),
        hidden = document.querySelector('.hidden'),
        close = document.getElementById('hidden-close');
    card1.addEventListener('click', () =>{
        hidden.style.display = 'block';
        hiddenCard1.style.display = 'block';
        document.body.setAttribute('data-open', '');
        close.addEventListener('click', () => {
            hidden.style.display = 'none';
            hiddenCard1.style.display = 'none';
            document.body.removeAttribute('data-open');
        })
    })
    card2.addEventListener('click', () =>{
        hidden.style.display = 'block';
        hiddenCard2.style.display = 'block';
        document.body.setAttribute('data-open', '');
        close.addEventListener('click', () => {
            hidden.style.display = 'none';
            hiddenCard2.style.display = 'none';
            document.body.removeAttribute('data-open');
        })
    })
    card3.addEventListener('click', () =>{
        hidden.style.display = 'block';
        hiddenCard3.style.display = 'block';
        document.body.setAttribute('data-open', '');
        close.addEventListener('click', () => {
            hidden.style.display = 'none';
            hiddenCard3.style.display = 'none';
            document.body.removeAttribute('data-open');
        })
    })
    card4.addEventListener('click', () =>{
        hidden.style.display = 'block';
        hiddenCard4.style.display = 'block';
        document.body.setAttribute('data-open', '');
        close.addEventListener('click', () => {
            hidden.style.display = 'none';
            hiddenCard4.style.display = 'none';
            document.body.removeAttribute('data-open');
        })
    })
}
