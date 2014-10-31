/*global  */
var express = require('express');
var router = express.Router();
var db = require('../database/model')
var mongo = require('../database/mongo')
/* GET home page. */

router.get('/', function(req,res) {
  db.OrderModel.find({}).sort({orderDate:'desc'}).exec((function(err,orders){
    res.render('orders',{orders : orders})
  }))
})


module.exports = router;
