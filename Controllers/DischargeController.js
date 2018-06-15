var mongoose = require('../DBConfig/db.config');
var Schema = mongoose.model('Discharge');
var PatientSchema = mongoose.model('Patient');
var DischargeController = function () {
    this.insert = function(data) {
        return new Promise(function (resolve,reject) {
            var discharge = Schema({
                patiant_id:data.patiant_id,
                name:data.name,
                age:data.age,
                ward_no:data.ward_no,
                admitted_date:data.admitted_date,
                Dischargedate:data.Dischargedate,
                Doctor:data.Doctor,
                issue:data.issue,
                Tretements:data.Tretements
            })
            discharge.save().then(function () {
                resolve({status:200,message:'Discharge details added'});

            }).catch(function (err) {
                reject({status:500,message:'Err : '+err});
            })

        })
    }

    this.deletePatient = function (id) {
        return new Promise(function (resolve, reject) {
            PatientSchema.remove({_id: id}).then(function () {
                resolve({status: 200, message: 'Patient deleted'});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        })
    }

    this.getSingle = function (id) {
        return new Promise(function (resolve, reject) {
            PatientSchema.find({_id: id}).exec().then(function (patient) {
                resolve({status: 200, data: patient});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        });
    }

}

module.exports = new DischargeController();