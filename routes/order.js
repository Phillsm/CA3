var db = require('../database/model')
/* GET home page. */

function orderHandler (req,res){
  console.log("order called")
  db.OrderModel.findById(req.params.id,function(err,order){
    res.render('order',{order : order})
  })
}

module.exports = orderHandler


