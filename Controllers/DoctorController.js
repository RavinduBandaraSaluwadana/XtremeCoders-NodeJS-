var mongoose = require('../DBConfig/db.config');
var DoctorSchema = mongoose.model('Doctor');

var doctorController = function() {
    this.add = function (doctorInstance) {
        console.log("11111");
        console.log(doctorInstance);
        return new Promise(function (resolve, reject){
            var doctor = new DoctorSchema({
                name: doctorInstance.name,
                specializedPriority: doctorInstance.specializedPriority
            });
            doctor.save().then(function() {
                resolve({status: 201, message: 'New doctor added'});
            }).catch(function (reason) {
                reject({status: 500, message:'Error - '+ reason});
            });
        });
    }

    this.getByPriority = function(condition){
        return new Promise (function(resolve,reject){
            DoctorSchema.find({specializedPriority : condition}).then(function(data){
                resolve({status:200, data:data});
            }).catch(function (err){
                reject({status:404 , message : "No Doctors Found!"});
            })
        })
    }

    this.getId = function(){
        return new Promise (function(resolve,reject){
            DoctorSchema.find().exec().then(function(data){
                resolve({status:200, data:data});
            }).catch(function (err){
                reject({status:404 , message : "No Doctors Found!"});
            })
        })
    }
}

module.exports = new doctorController();

