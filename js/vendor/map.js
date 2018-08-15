function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(44.813376,20.489042), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}