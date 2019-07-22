const request = require('request-promise-native');

module.exports = async function (context, req) {
    // call to httptrigger3/Trigger1, which has circuit breaker set on it
    const options = {
        method: "POST",
        uri: `http://httptrigger3-http/api/Trigger1`,
        body: ""
    };

    const result = await request(options);
    
    context.res = {
        body: `Hello ${JSON.parse(result).name}`
    }
};