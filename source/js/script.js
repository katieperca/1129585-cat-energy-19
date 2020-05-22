var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var map;

function initMap() {
  var coordinates = {lat: 59.938851, lng: 30.323047},
      center = coordinates,
      image = '../img/map-pin.png';

  if (window.innerWidth >= 1300) {
    center = {lat: 59.939100, lng: 30.319379};
  }

  map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 17
  });
  marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      icon: image
  });
}

initMap();
svg4everybody();
