var db = require('../database/model')
/* GET home page. */

function orderHandler (req,res){
  db.OrderModel.findById(req.params.id,function(err,order){
    db.DetailsModel.find({order: order._id})
    .populate('product')
    .exec(function(err,details){
      details.forEach(function(elem){
        elem.totalPrice = elem.unitPrice * elem.quantity
      })
      res.render('order',{order : order, details : details})
    })
  })
}

module.exports = orderHandler


