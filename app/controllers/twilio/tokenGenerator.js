let twilio = require('twilio');

const AccessToken = twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;
const TWILIO_CHAT_SERVICE_SID ="IS857cb398decb405f94eb8874363ca428";
const TWILIO_ACCOUNT_SID = "AC78d0e46f8a9dcafe55c27108807994f0";
const TWILIO_API_KEY = "SK305fda25f77e211ffa3de069866d6370";
const TWILIO_API_SECRET = "rybb64Yuzz32xwKyCFKUzTrKky2uCdkh";

function TokenGenerator(identity, deviceId){
    const appName = 'CaviarDatingApp';
    // create a unique idenfier for the current device
    const endPointId = appName + ":" + identity + ":" + deviceId;
    const chatGrant = new ChatGrant({
        serviceSid: TWILIO_CHAT_SERVICE_SID,
        endpointId: endPointId
    });
    // create an access token which we will sign and return to the client. This contains the grant as well
    const token = new AccessToken(
        TWILIO_ACCOUNT_SID,
        TWILIO_API_KEY,
        TWILIO_API_SECRET
    );
    token.addGrant(chatGrant);
    token.identity = identity;

    return token;
}

module.exports = {generator: TokenGenerator};