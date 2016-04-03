$(document).ready(function(){

$( "#search" ).click(function() {

  $.getJSON("https://api.forecast.io/forecast/38e363a74ccbfe8866a3b47d6f70ffba/37.8267,-122.423", function(json) {

      console.log(json);

               //TMDb is nice enough to return a message if nothing was found, so we can base our if statement on this information

               // if (json != "Nothing found."){

                  //Display the poster and a message announcing the result

                     // $('#poster').html('<h2 class="loading">Well, gee whiz! We found you a poster, skip!</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');
 // alert( "Handler for .click() called." );
    });
  });
});
