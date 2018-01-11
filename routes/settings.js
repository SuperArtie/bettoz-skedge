//const KEYFILE = '<yourpem.pem>';
const SERVICE_ACCT_ID = process.env.GCA_SERVICE_ACCT_ID;

const CALENDAR_URL = process.env.GCA_CALENDAR_URL;
const CALENDAR_ID = {
  'bettos': process.env.GCA_CALENDAR_ID
};
const TIMEZONE = 'UTC-05:00';
const key = process.env.GCA_PRIVATE_KEY;
module.exports.key = key;
module.exports.calendarUrl = CALENDAR_URL;
module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.calendarId = CALENDAR_ID;
//module.exports.keyFile = KEYFILE;           //or if using json keys - module.exports.key = key; 
module.exports.timezone = TIMEZONE;