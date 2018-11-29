let express = require('express');
let router = express.Router();
let twilioController = require("../app/controllers/twilio/tokenGenerator");

router.get('/', function(req, res, next) {
    let token = twilioController.generator("bishal@gmail.com", "Web");
    console.log("this is twilio default");
    res.json(token);
});
router.post('/', function(req, res, next) {
    let token = twilioController.generator(req.body.email, req.body.deviceId);
    res.json(token);
});

module.exports = router;