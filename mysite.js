window.onload = init;

function init() {
       showVideo(); 
       setName();          
};

function showVideo() {
      let video = document.getElementById("video");
      video.src = "video/startvideo.mp4";
      video.load(); 
      video.play();
      if(video.error) {
        alert(video.error.code);
      }
};

function setName() {      
        let phrase=document.getElementById("starttext");
        phrase.innerHTML = "Приветствую Вас на моем первом личном сайте";
        
        if(window["localStorage"]) {
         
         if(!localStorage.getItem("name")) {
         
         let name = prompt("Приветствую Вас на моем личном сайте, введите пожалуйста свое имя");
         localStorage.setItem("name", name);
      
         } 
         
         let name = localStorage.getItem("name");
         phrase.innerHTML = "Приветствую Вас, " + name + ", на моем первом личном сайте";
         if(name == "null" || name =="") {
         phrase.innerHTML = "Приветствую Вас на моем первом личном сайте";
         }
       }
};