// interservice call to httptrigger3/trigger2
const request = require('request-promise-native');

module.exports = async function (context, req) {
    const options = {
        method: "POST",
        uri: `http://httptrigger3-http/api/Trigger2`,
        body: ""
    };

    const result = await request(options);
    
    context.res = {
        body: `Hello ${JSON.parse(result).name}`
    }
};