(function(){

	$(document).ready(function(){
	$('#nav').localScroll(800);

	$('#intro').parallax("50%", 0.1);
	$('#industry').parallax("50%", 0.1);
  $('#map-wrapper').parallax("50%", 0.1);
	$('#flower-school').parallax("50%", 0.4);
	$('#end').parallax("50%", 0.3);
})

  var map = L.map('map', {scrollWheelZoom: false}).setView([39.2500,-97.743061], 4);
    
  L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(map);
  map.dragging.disable();


}).call(this);