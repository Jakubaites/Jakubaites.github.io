window.onload = init;

function init() {
      // showVideo(); 
       setName();  
       /*getMyLocation();*/ 
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

/*function showVideo() {
      let video = document.getElementById("video");
      video.src = "video/startvideo.mp4";
      video.load(); 
      video.play();
      
      if(video.error) {
        alert(video.error.code);
      }
};
*/
function setName() {      
        let phrase = document.getElementById("starttext");
        phrase.innerHTML = "Приветствую Вас на моем первом личном сайте";
        
        if(window["localStorage"]) {
         
         if( !localStorage.getItem("name") ) {
         
         let name = prompt("Приветствую Вас на моем личном сайте, введите пожалуйста свое имя");
         localStorage.setItem("name", name);
      
         } 
         
         let name = localStorage.getItem("name");
         phrase.innerHTML = `Приветствую Вас, ${name}, на моем первом личном сайте`;
         if(name == "null" || name =="") {
         phrase.innerHTML = "Приветствую Вас на моем первом личном сайте";
         }

       }
};

/*function getMyLocation() {
      if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(displayLocation);
  } else {
      alert('Ooops, no geolocation support');
 }
};

function displayLocation(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      let loc = document.getElementById('location');
      loc.innerHTML = `Ваша широта: ${latitude}, Ваша долгота ${longitude}`;
};*/