var express = require('express');
var router = express.Router();
var Database = require('../models/database')

var database = new Database();


//get users
router.get('/list', function(req, res, ) {

    database.readTable('users', 'email',
    (result) => {res.send(result)},
    (error) => {console.log('Something went wrong!' + error)});
});

module.exports = router;