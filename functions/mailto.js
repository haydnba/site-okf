const { OWNER_EMAIL } = process.env;

exports.handler = function(event, context, callback) {
    callback(null, {
        status: 200,
        body: `mailto:${OWNER_EMAIL}?subject=test`
    });
}