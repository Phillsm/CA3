var mongoose = require('mongoose');



module.exports.connect = function(){
  mongoose.connect("mongodb://localhost/northwind");

  mongoose.connection.once('open',function(){
    console.log("connected");
  })
}
module.exports.close = function(){
  mongoose.connection.close();
}