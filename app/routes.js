var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post('/chat', function (req, res) {
    console.log(req.body.reporttype);
    res.redirect(req.body.reporttype);
})

router.post('/online', function (req, res) {
    console.log(req.body.reporttype);
    res.redirect(req.body.reporttype);
})

router.post('/phone', function (req, res) {
    console.log(req.body.reporttype);
    res.redirect(req.body.reporttype);
})


module.exports = router
