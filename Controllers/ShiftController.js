var mongoose = require('../DBConfig/db.config');
var ShiftSchema = mongoose.model('Shift');

var shiftController = function(){
    this.addShift = function (data) {
        console.log(data);
        return new Promise(function (resolve,reject) {
            var shift = new ShiftSchema({
                employeeId : data.employeeId,
                toTime : data.toTime,
                fromTime : data.fromTime,
                toDate : data.toDate,
                fromDate : data.fromDate
            });

            shift.save().then(function () {
                resolve({status: 200, message: "shift added!"});
            }).catch(function (err) {
                reject({status: 500, message: "Error: "+ err});
            })
        })
    }

    this.getAllShifts = function () {
        return new Promise(function (resolve, reject) {
            ShiftSchema.find().exec().then(function (data) {
                resolve({status: 200, data: data});
            }).catch(function (err) {
                reject({status: 500, message: "Error "+ err});
            });
        });
    };

    this.updateShift = function (id, data) {
        console.log("inside controller update");
        return new Promise(function (resolve, reject) {
            ShiftSchema.update({employeeId : id}, data ).exec().then(function () {
                console.log("uuu");
                resolve({status: 200, message: "Shift details updated!"});
            }).catch(function (err) {
                console.log("ppp");
                reject({status: 500, message: "Error: "+ err});
            })
        })
    };

    this.deleteShift = function (id) {
        return new Promise(function (resolve, reject) {
            ShiftSchema.remove({employeeId : id}).then(function () {
                resolve({status: 200, message: "Shift deleted!"});
            }).catch(function (err) {
                reject({status: 404, message: "No shift as such!"});
            })
        })
    };

    this.getShiftsById = function(employeeId){
        return new Promise (function(resolve,reject){
            ShiftSchema.find({employeeId : employeeId}).then(function(data){
                resolve({status:200, data:data});
            }).catch(function (err){
                reject({status:404 , message : "No Shifts found"});
            })
        })
    }
};

module.exports = new shiftController();