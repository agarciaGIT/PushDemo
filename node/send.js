var gcm = require('node-gcm');
var message = new gcm.Message();
 
//API Server Key
var sender = new gcm.Sender('AIzaSyCNK_2q6MtvaRpbhl-2taOp492nsL7TrFs');
var registrationIds = [];
 
// Value the payload data to send...
message.addData('message',"\u270C Peace, Love \u2764 and PhoneGap \u2706!");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar
message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
 
// At least one reg id required
registrationIds.push('APA91bHFGbvA6MwpeUsKW8VBnPt4RzweJnjDSbh_v4nlYub6etRjK4FLu4hwxUCMolHA9nUkg8SnQ8oupmhD4Pug928Y0t1GfWlNpH0z0mJqv8Z2-Up8y4XeiTbM0S81zdHMfQGxe_RclpYkbVbm38mynYd3rIMN2Q');
 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});