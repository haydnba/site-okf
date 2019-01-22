const { OWNER_EMAIL } = process.env;

exports.handler = function(event, context, callback) {
    callback(null, {
        status: 200,
        body: OWNER_EMAIL
    });
}