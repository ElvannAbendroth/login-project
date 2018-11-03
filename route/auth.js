var express = require('express');
var router = express.Router();

/*
server adress: 35.237.104.129
Username: Webapp
Password: process.env.MYSQL_PASSWORD
Database: CreateWaves */

//get login
router.get('/login', function(req, res, ) {
    res.send("this is the login page")
});

//get register
router.get('/register', function(req, res, ) {
    res.send("this is the register page")
});

module.exports = router;