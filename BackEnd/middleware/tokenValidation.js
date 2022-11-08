const constants = require('../constants');
const jwt = require('jsonwebtoken');

module.exports.validateToken = (req, res, next) => {
    let response = { ...constants.defaultServerResponse };

    if (!req.headers.authorization || typeof req.headers.authorization === 'undefined') {
        throw new Error(constants.commonQueryMessage.MISSING_AUTH_TOKEN);
    } else {
        try {
            const decoded = jwt.verify(req.headers.authorization.split('Bearer')[1].trim(), 'my-secret-key');
            console.log('decoded', decoded);
        } catch (error) {
            response.message = error.message;
            response.status = 401;
        }
        return res.status(response.status).send(response);
    }

}