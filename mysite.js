window.onload = init;

function init() {
       navbar();
};

function navbar() {
      let menu = document.querySelector('.menu_body');
       let menuButton = document.querySelector('.menu__icon');
       let body = document.body;

       if (menu && menuButton) {
       menuButton.addEventListener('click', e => {
            menu.classList.toggle('active');
            menuButton.classList.toggle('active');
            body.classList.toggle('lock');
       })
       };         
      
};