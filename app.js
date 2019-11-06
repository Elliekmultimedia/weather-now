require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

const apiKey = process.env.APIKEY;

console.log(process.env.APIKEY)
//setting view engine
app.set('view engine', 'ejs');

//middleware
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:false}));


/*
    Routes
*/

//GET ROOT/
app.get('/', function (req, res) {
  
  res.render('home.ejs', { weather: null, error: null });
});

// handling post request for root
app.post('/', function(req,res) {
  let url = "http://api.openweathermap.org/data/2.5/weather?q=" + req.body.location
  
  res.render('home.ejs', {weather: weatherNow, error: err});
  
  request(function(error, response, body) {
  console.log('error', error);
  console.log('statusCode', response && response.statusCode);
  console.log('body:', body)

})
})



app.listen(3000, function(){
    console.log('server is live on port: 3000')
});

