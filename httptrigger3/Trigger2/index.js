module.exports = async function (context, req) {
    context.res = {
        body: {
            role: "intern"
        }
    }
};