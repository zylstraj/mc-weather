// Require the module
var Forecast = require('forecast');

module.exports = (router) => {

  router.get('/weather', (req, res) => {
    // Initialize
var forecast = new Forecast({
  service: 'forecast.io',
  key: process.env.FORECAST_IO_TOKEN,
  units: 'us', // Only the first letter is parsed
  cache: true,      // Cache API requests?
  ttl: {            // How long to cache requests. Uses syntax from moment.js: http://momentjs.com/docs/#/durations/creating/
    minutes: 27,
    seconds: 45
    }
});

// Retrieve weather information from coordinates (Sydney, Australia)
forecast.get([50.1163, -122.9574], function(err, weather) {
  if(err) return console.dir(err);
  //res.json(weather);
  console.dir(weather.currently.daily);
});
  //if(err) return console.dir(err);
// var forecastApiKey = process.env.OPEN_WEATHER_TOKEN;
// var lat = "";
// var long = "";
// // Connect to the weather API
// var getWeather = function(lat,long){

//   var request = https.get("https://api.forecast.io/forecast/"+forecastApiKey+"/"+lat+","+long,function(response){

//     var body = "";

//     // Read the data in
//     response.on('data', function (chunk) {
//       body += chunk;
//     });

//     response.on('end', function(){
//       if (response.statusCode === 200){
//         try {
//           // Parse the data
//           var weather = JSON.parse(body);

//           // Print the data
//           console.log(weather.hourly.summary);
//         } catch (error) {
//           // Parse Error
//           printError(error);
//         }
//       } else {
//         // Status Code Error
//         printError({message:"There was an error getting the weather for "+zipcode+". ("+http.STATUS_CODES[response.statusCode]+")"});
//       }
//     });
//   });
})
}
