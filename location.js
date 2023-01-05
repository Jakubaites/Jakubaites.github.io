window.onload = getMyLocation;

let myCoords = {
        latitude: 43.4517015,
        longitude: 39.9271842
};

let map;

function getMyLocation() {
      if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(displayLocation);
       let button = document.getElementById('button');
       button.onclick = buttonFirstClick;
  } else {
      alert('Ooops, no geolocation support');
 }
};


function displayLocation(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let latUnits = 'с.ш.';
      let longUnits = 'в.д.';
      if(latitude < 0) {
        latUnits = 'ю.ш';
      };
      if(longitude < 0) {
        longUnits = 'з.д.';
      };
      let div = document.getElementById('geolocationUser');
      div.innerHTML = `Ваша широта: ${latitude} ${latUnits}, Ваша долгота: ${longitude} ${longUnits}`;
      let accuracy = document.getElementById('accuracy');
      accuracy.innerHTML = `Точность определения координат: ${position.coords.accuracy.toFixed(1)} м.`
      let km = computeDistance(position.coords, myCoords);
      let distance = document.getElementById("distance");
      distance.innerHTML = `Расстояние от Вас до создателя сайта: ${Math.round(km)} км.`;
      if(km < 1) {
      distance.innerHTML = `Расстояние от Вас до создателя сайта: ${Math.round(km * 1000)} м.`;
      }; 
      showMap(position.coords);
};

function computeDistance(startCoords, destCoords) {
      let startLatRads = degreesToRadians(startCoords.latitude);
      let startLongRads = degreesToRadians(startCoords.longitude);
      let destLatRads = degreesToRadians(destCoords.latitude);
      let destLongRads = degreesToRadians(destCoords.longitude);
 
      let Radius = 6371;

      let distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
                     Math.cos(startLatRads) * Math.cos(destLatRads) *
                     Math.cos(startLongRads - destLongRads)) * Radius;
      return distance;
};

function degreesToRadians(degrees) {
      return (degrees * Math.PI)/180;
};

function showMap(coords){
     let googleObj = new google.maps.LatLng(coords.latitude,coords.longitude);
     
     let mapOptions = {
         zoom: 10,
         center: googleObj,
         mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     let mapDiv = document.getElementById("map");
     map = new google.maps.Map(mapDiv, mapOptions);
     let title = "Ваше местоположение";
     let content = `Ваше местоположение: ${coords.latitude} ${coords.longitude}`;
     addMarker(map, googleObj, title, content);
};

function addMarker(map,latlong,title,content) {
     let markerOptions = {
       position: latlong,
       map: map,
       title: title,
       clickable: true
     };
     let marker = new google.maps.Marker(markerOptions);
     let infoWindowOptions = {
       content: content,
       position: latlong
     }; 
     let infoWindow = new google.maps.InfoWindow(infoWindowOptions);
     google.maps.event.addListener(marker, "click", function() {
         infoWindow.open(map);
     });
};


function buttonFirstClick() {
      navigator.geolocation.getCurrentPosition(buttonClick);
};

function buttonClick(position) {
     let coordPurp = {
        latitude: document.getElementById('latPurp').value,
        longitude: document.getElementById('longPurp').value
     };
     if(isNaN(coordPurp.latitude) ||  isNaN(coordPurp.longitude) || 
              coordPurp.latitude == '' || coordPurp.longitude == '') {
        alert('Введите числовые координаты');
     } else { 
     let result = document.getElementById('result');
     let resultDistance = computeDistance(position.coords, coordPurp);
     if(resultDistance > 1) {
     result.innerHTML = `Расстояние до выбранного объекта ${Math.round(resultDistance)} км`;
     } else {
     result.innerHTML = `Расстояние до выбранного объекта ${Math.round(resultDistance * 1000)} м`;
     };
   };
};