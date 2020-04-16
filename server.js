require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/user.route')
const authRoute = require('./routes/auth.route')
const app = express()
const authMiddleware = require('./middlewares/auth.middleware')
const cookieParser = require('cookie-parser')
app.use(cookieParser(process.env.SESSION_SECRET))
const port = 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('index.pug')
})
app.use('/userlist', authMiddleware.requireAuth, userRoute)
app.use('/auth', authRoute)

app.listen(port, function() {
    console.log('In Progress')
})

