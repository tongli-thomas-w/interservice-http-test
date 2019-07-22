const request = require('request-promise-native');

module.exports = async function (context, req) {
    // interservice call to httptrigger2/Trigger2, which is going to return statusCode 502
    const options = {
        method: "POST",
        uri: `http://httptrigger2-http/api/Trigger2`,
        body: ""
    };

    const result = await request(options);
    
    context.res = {
        body: result
    }
};