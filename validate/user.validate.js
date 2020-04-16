module.exports.validateuser = function(req, res, next) {
    var errors = []
    if (!req.body.name) {
        errors.push('Name is required')
    }
    if (!req.body.phone) {
        errors.push("Phone number is required")
    }
    if (errors.length) {
        res.render('./users/createuser', {
            errors: errors,
            values: req.body
        })
        return
    }
    next()

}