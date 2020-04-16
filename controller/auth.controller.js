const md5 = require('md5')
const db = require('../db')
const bodyParser = require('body-parser')
module.exports.login = function(req, res) {
    res.render('auth/login')
}
module.exports.postLogin = function(req, res) {
    var email = req.body.email
    var password = req.body.password
    var user = db.get('users').find({ email: email }).value()
    if (!user) {
        res.render('auth/login', {
            errors: ["User does not exists"],
            values: req.body
        })
        return
    }
    var harshpassword = md5(password)
    if (user.password !== harshpassword) {
        res.render('auth/login', {
            errors: ['Wrong password']
        })
        return
    }

    res.cookie('userId', user.id, {
        signed: true
    })
    res.redirect('/userlist')

}