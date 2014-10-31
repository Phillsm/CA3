var db = require('../database/model')

function customerHandler (req,res){
  db.CustomerModel.findById(req.params.id,function(err,customer){
    res.render('customer',{customer:customer})
  })
}

module.exports = customerHandler