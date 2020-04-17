const express = require('express')
const bodyParser = require('body-parser')
const db = require('../db')
module.exports.index = function(req, res) {
    res.render('./users/userlist', {
        users: db.get('users').value()
    })
}
module.exports.create = function(req, res) {
    res.render('./users/createuser')
}
module.exports.postCreate = function(req, res) {
    req.body.avatar = req.file.path.split('/').slice(1).join('/')
    db.get('users')
        .push(req.body)
        .write()

    res.redirect('/userlist')

}
module.exports.searchuser = function(req, res) {
    var q = req.query.q
    var matchedUsers = db.get('users').value().filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    })
    res.render('./users/userlist', {
        users: matchedUsers
    })
}
module.exports.viewuser = function(req, res) {
    var id = parseInt(req.params.id);
    var user = db.get('users').find({ id: id }).value()
    res.render('./users/viewuser', { user: user })
}