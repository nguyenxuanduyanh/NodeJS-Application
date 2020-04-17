const express = require('express')
const db = require('../db')
const bodyParser = require('body-parser')

module.exports.index = function(req, res) {
    var perPage = 8
    var page = parseInt(req.query.page) || 1
    var start = (page - 1) * perPage
    var end = page * perPage;
    res.render('./products/index', { products: db.get('products').slice(start, end).value() })
}
module.exports.search = function(req, res) {
    var q = req.query.q
    var matchedproduct = db.get('products').value().filter(function(product) {
        return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('./products/index', {
        products: matchedproduct
    })
}