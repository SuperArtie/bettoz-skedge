var express = require('express');
var router = express.Router();
const CONFIG = require('./settings.js');
const CalendarAPI = require('node-google-calendar');
let cal = new CalendarAPI(CONFIG);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/yo', function(req, res, next) {
  let params = {
    timeMin: '2017-05-20T06:00:00+08:00',
    timeMax: '2018-05-25T22:00:00+08:00',
    singleEvents: true,
    orderBy: 'startTime'
  }; 	//Optional query parameters referencing google APIs
  
  cal.Events.list(CONFIG.calendarId.bettos, params)
    .then(json => {
    //Success
    console.log('List of events on calendar within time-range:');
    console.log(json);
    }).catch(err => {
    //Error
    console.log('Error: listSingleEvents -' + err.message);
    });
  res.send('respond wittgtg4g4tg4gh a resource');
});

module.exports = router;
