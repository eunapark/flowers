(function(){

	$(document).ready(function(){
	// $('#nav').localScroll(800);

	// $('#intro').parallax("50%", 0.1);
	// $('#industry').parallax("50%", 0.1);
 //  $('#map-wrapper').parallax("50%", 0.1);
	// $('#flower-school').parallax("50%", 0.4);
	// $('#end').parallax("50%", 0.3);
})

  // MAP DIV
  var map = L.map('map', {scrollWheelZoom: false}).setView([39.2500,-97.743061], 3);
    
  L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(map);

  var flowerInfo = {
  
  'rose':{  
    flower:'Rose',
    thisinfo:'Today, some 78 percent of the 4 billion cut flower stems purchased in the U.S. — including the roses bought on Valentine\'s Day — come from Colombia and Ecuador, where they are grown in large production greenhouses, then harvested, sorted and shipped out around the world. Roses are the most important traded product of the cutflower industry and play a key role in the $20 billion U.S. floral industry.',
    lat:0.5376666,
    lng:-77.8739844,
    source:'http://www.organicbouquet.com/i_504/msnbc-article-roses.html'
    },

  'daisy':{ 
    flower:'Daisy',
    thisinfo:'New York City',
    lat:40.8075,
    lng:-73.9619,
    source:'',
    },

  'tulip':{  
    flower:'Tulip',
    thisinfo:'Holland\'s vast wealth of cut flowers is still readily available in the U.S., too. Tulips lead the list of top exports from the Netherlands, accounting for almost 95% of all U.S. tulip imports. Roses, lilies, Gerberas, Freesias, snapdragons, and cymbidium orchids are other Dutch favorites.',
    lat:52.2129918,
    lng:5.2793703,
    source:'http://www.800florals.com/care/flowers-sources.asp',
    },

  'lilly':{
    flower:'Lilly',
    thisinfo:'Chicago',
    lat:41.878114,
    lng:-87.629798,
    source:'',
    }

  };

  $('.mapButton').on('click', function(){
      var id = $(this).find('[data-which]');
      console.log(id);
      $('#map-canvas').html('')
                      .append(flowerInfo[id].thisinfo)
                      .addClass('canvas-alive');
      $('.map-title').html('')
                    .append(flowerInfo[id].flower);
      $(this).find('img').addClass('active-map-button')
      var latlng = L.latLng(flowerInfo[id].lat, flowerInfo[id].lng);
      map.setView(latlng, 5);
  })


  // END MAP DIV




}).call(this);