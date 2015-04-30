(function(){

	$(document).ready(function(){
	$('#nav').localScroll(800);

	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#intro').parallax("50%", 0.1);
	$('#second').parallax("50%", 0.1);
	$('.bg').parallax("50%", 0.4);
	$('#third').parallax("50%", 0.3);
	$('#fourth').parallax("50%", 0.3);
	$('#fifth').parallax("50%", 0.3);

})

// leaflet --interactive map

// make setView to show all continents

	var map = L.map('map').setView([40.8075, -73.9619], 16);

	// L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
 //    	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
 //    	maxZoom: 18
	// }).addTo(map);

 //    var marker = L.marker([40.8075, -73.9633]).addTo(map);
 //        marker.bindPopup("Columbia Journalism School");

 //    // Wayne
 //    var marker = L.marker([40.959418, -74.273814]).addTo(map);
 //        marker.bindPopup("Wayne, New Jersey");

 //    // Lville
 //    var marker = L.marker([40.294537, -74.729012]).addTo(map);
 //        marker.bindPopup("The Lawrenceville School");

 //    // BMC
 //    var marker = L.marker([40.026300, -75.312867]).addTo(map);
 //        marker.bindPopup("Bryn Mawr College");


 //    var circle = L.circle([40.8075, -73.9633], 50, {
 //        color: 'red',
 //        fillColor: '#f03',
 //        sfillOpacity: 0.5
 //    }).addTo(map);

 //    circle.bindPopup("Columbia Journalism School");


    // function onMapClick(e) {
    //     alert("Location: " + e.latlng);
    // }

    // map.on('click', onMapClick);


// Exercise 2
// Make button when click map detects user's geolocation and zooms on the map
// Make a few buttons that zoom to diff areas on map

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("Location: " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);

 $('#here').on('click', function(){
    map.locate({setView: true});
    console.log('User Location');
 });

// $('#hometown').on('click', function(){
//     map.setView([40.959418, -74.273814], 15);
//     console.log('Wayne button');
// });

// $('#hs').on('click', function(){
//     map.setView([40.294537, -74.729012], 15);    
//     console.log('Lville');
// });

// $('#college').on('click', function(){
//     map.setView([40.026300, -75.312867], 15);
//     console.log('BMC');
// });


// I manually inputed every lat long 

   // var marker = L.marker([40.7300, -73.9950]).addTo(map);
   //     marker.bindPopup("New York University");

   // var marker = L.marker([40.7684, -73.9647]).addTo(map);
   //     marker.bindPopup("Hunter College");

   // var marker = L.marker([40.7467, -73.9942]).addTo(map);
   //     marker.bindPopup("Fashion Institute of Technology");

   // var marker = L.marker([40.7353, -73.9942]).addTo(map);
   //     marker.bindPopup("Fashion Institute of Technology");



// Exercise 3
// JSON Data

// Getting file from data.json

// $.getJSON('../data/data.json', function(mydata){
//     console.log('this is my data', mydata);
// });

// change data to flowers origin and distribution 

var location_data =[
   {    "Name": "New York University",
        "Lat": "40.7300",
        "Long": "-73.9950"
    },

    {   "Name": "Hunter College",
        "Lat": "40.7685",
        "Long": "-73.9647",
    },
    
    {   "Name": "Fashion Institute of Technology",
        "Lat": "40.7467",
        "Long": "-73.9942"
    },
    
    {   "Name": "Parsons",
        "Lat": "40.7353",
        "Long": "-73.9942"
    }
]

// Loop

var locations = ['NYU', 'Hunter College', 'FIT', 'Parsons'];
    for (var i = 0; i<locations.length; i++)

    function cycle(markers) {
    var i = 0;
    function run() {
        if (++i > markers.length - 1) i = 0;
        map.setView(markers[i].getLatLng(), 12);
        markers[i].openPopup();
        window.setTimeout(run, 3000);
    }
    run();
}

for (var i = 0; i <locations.length; i++) {
   marker = new L.marker([location_data[i].Lat,location_data[i].Long])
    .bindPopup(location_data[i].Name)
    .addTo(map);
  }        



}).call(this);