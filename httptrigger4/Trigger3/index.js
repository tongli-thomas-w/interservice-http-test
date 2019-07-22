const request = require('request-promise-native');

module.exports = async function (context, req) {
    const options = {
        method: "POST",
        uri: `http://httptrigger3-http/api/Trigger3`,
        // uri: `http://13.70.21.195/api/Trigger1`,
        body: ""
    };

    const result = await request(options);
    
    context.res = {
        body: result
    }
};