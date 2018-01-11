var express = require('express');
var moment = require('moment');
var router = express.Router();
const CONFIG = require('./settings.js');
const CalendarAPI = require('node-google-calendar');
let cal = new CalendarAPI(CONFIG);


/* GET home page. */
router.get('/', function(req, res, next) {
  let bettosEvents = [];
  let params = {
    timeMin: '2017-05-20T06:00:00+08:00',
    timeMax: '2018-05-25T22:00:00+08:00',
    singleEvents: true,
    orderBy: 'startTime'
  }; 	//Optional query parameters referencing google APIs
  cal.Events.list(CONFIG.calendarId.bettos, params)
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        let punkShow = {
          summary: json[i].summary,
          date: moment(json[i].start.dateTime).format('MMMM Do YYYY, h:mm a'),
          description: json[i].description
        };
        bettosEvents.push(punkShow);
      }
        //Success
        console.log('List of events on calendar within time-range:');
        console.log(json);

        res.render('index', { title: "Weekend @ Betty's", googleCalendarEvents: bettosEvents });
    }).catch(err => {
        //Error
        console.log('Error: listSingleEvents -' + err.message);
        res.render('index', { title: "error" });
  });
});

module.exports = router;
