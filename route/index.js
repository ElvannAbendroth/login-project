/* Dependencies Import*/
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* Models Import */
var templateEngine = require('../models/templateEngine');


/*new templateEngine(templateString, pageUrl, title, meta, content)*/

/* GET home page. */
router.get('/', function(req, res, next) {
    const title = "Login Project"
    //const meta = fs.readFileSync(path.join(__dirname, '../views/meta.html'), "utf8");
    const url = '/';
    const content = '';
    
    //const metaTemplate = templateEngine(meta, '/', title, '', '');
  
    const template = fs.readFileSync(path.join(__dirname, '../views/index.html'), "utf8");
    const result = templateEngine(template, '/', title, '', '');
    res.send(result);
  });

module.exports = router;