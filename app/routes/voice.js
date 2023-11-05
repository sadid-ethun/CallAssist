const VoiceResponse = require('twilio').twiml.VoiceResponse;
var SurveyResponse = require('../models/SurveyResponse');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://owang20:ND6IOcXd4u6WY2WJ@callassist.wpufsst.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

//Main convo loop
exports.interview = function(request, response){
    var userInput = request.body.SpeechResult; 
    var phone = request.body.From;
    var input = request.body.RecordingUrl || request.body.Digits;
    var twiml = new VoiceResponse();

    function say(text) {
        twiml.say({ voice: 'alice'}, text);
    }

    // respond with the current TwiML content
    function respond() {
        response.type('text/xml');
        response.send(twiml.toString());
    }

    SurveyResponse.advanceSurvey({
        phone: phone,
        input: input,
        survey: survey
    }, function(err, surveyResponse, questionIndex) {
        
        var question = survey[questionIndex];

        if (err || !surveyResponse) {
            say('Terribly sorry, but an error has occurred. Goodbye.');
            return respond();
        }

        // Add a greeting if this is the first question
        if (questionIndex === 0) {
            say('Thank you for taking our survey. Please listen carefully '
                + 'to the following questions.');
        }

        // Otherwise, ask the next question
        say(question.text);

        // Depending on the type of question, we either need to get input via
        // DTMF tones or recorded speech
        if (question.type === 'text') {
            say('Please record your response after the beep. '
                + 'Press any key to finish.');
            twiml.record({
                transcribe: true,
                transcribeCallback: '/voice/' + surveyResponse._id
                    + '/transcribe/' + questionIndex,
                maxLength: 60
            });
        } else if (question.type === 'boolean') {
            say('Press one for "yes", and any other key for "no".');
            twiml.gather({
                timeout: 10,
                numDigits: 1
            });
        } 

        // render TwiML response
        respond();
    });
};


