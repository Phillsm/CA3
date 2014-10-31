var db = require('../database/model')

function employeeHandler (req,res){
  db.EmployeeModel.findById(req.params.id,function(err,employee){
    res.render('employee',{employee:employee})
  })
}

module.exports = employeeHandler