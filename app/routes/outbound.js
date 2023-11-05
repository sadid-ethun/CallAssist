require('dotenv').config()

var accountSid = 'AC924e6223c70f68f8c38834fc844bf035';
var authToken = 'b13dab2b3770be73fc90bd6737c39911';

var client = require('twilio')('AC924e6223c70f68f8c38834fc844bf035', 'd45bb3b0d83af7cbcc5313a3c840bae0');

client.calls
      .create({
         url: 'https://2063-72-80-62-223.ngrok.io/voice',
         to: '+13477204689',
         from: '+13477516730'
       }, function(err, call) {
           if(err) {
               console.log(err);
           }
           else {
               console.log(call.sid);
           }
       })
