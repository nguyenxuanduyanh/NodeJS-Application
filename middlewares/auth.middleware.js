const db = require('../db')

module.exports.requireAuth = function(req, res, next) {
    if (!req.signedCookies.userId) {
        res.redirect('/auth/login');
        return;
    }
    var id = parseInt(req.signedCookies.userId)
    var user = db.get('users').find({ id: id }).value();
    if (!user) {
        res.redirect('/auth/login');
        return;
    }
    res.locals.user = user
    next()
}