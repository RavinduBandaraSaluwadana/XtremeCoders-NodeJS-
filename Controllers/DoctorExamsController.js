var mongoose = require('../DBConfig/db.config');
var DoctorExamSchema = mongoose.model('DocExam');

var doctorexamController = function () {
    this.addExam = function (examInstance) {
        return new Promise(function (resolve, reject) {
            var doctorexam = new DoctorExamSchema({
                     patientid:examInstance.patientid,
                     name:examInstance.name,
                     complaints:examInstance.complaints,
                     allergies:examInstance.allergies,
                     physicalExaminations:examInstance.physicalExaminations,
                     treatments:examInstance.treatments,
                     drugs:examInstance.drugs

            });
            doctorexam.save().then(function () {
                resolve({status: 201, message: "Examination record added"});
            }).catch(function (reason) {
                reject({status: 500, message: "Error "+reason});
            });
        });
    }

    this.getAllRecords = function () {
        return new Promise(function (resolve, reject) {
            DoctorExamSchema.find().exec().then(function (data) {
                resolve({status: 200, data: data});
            }).catch(function (reason) {
                reject({status: 500, message: "Error "+reason});
            });
        });
    }

    this.getByID = function (patientid) {
        return new Promise(function (resolve, reject) {
            DoctorExamSchema.find({patientid:patientid}).exec().then(function (data) {
                resolve({status: 201, data: data});
            }).catch(function (reason) {
                reject({status: 500, message: "Error "+reason});
            });
        });
    }



    this.updateRecord = function (patientid) {
        return new Promise(function (resolve, reject) {
            DoctorExamSchema.update({patientid:patientid},data).then(function () {
                resolve({status: 201, message: "Record updated"});
            }).catch(function (reason) {
                reject({status: 500, message: "Error "+reason});
            });
        });
    }
}

module.exports = new doctorexamController();