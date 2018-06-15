const mongoose = require('mongoose');
//require your schemas here
var PatientSchema = require('../Models/PatientSchema');
var BedSchema = require('../Models/BedSchema');
var ExamSchema = require('../Models/DoctorExamSchema')
var DischargeSchema = require('../Models/DischargeSchema');
var Transfer = require('../Models/TransferSchema');
var ShiftSchema = require('../Models/ShiftSchema');
var DoctorSchema = require('../Models/DoctorSchema');

//Schemas
//register your model here
mongoose.model('Patient', PatientSchema);
mongoose.model('Bed', BedSchema);
mongoose.model('DocExam', ExamSchema);
mongoose.model('Discharge',DischargeSchema);
mongoose.model('Transfer',Transfer);
mongoose.model('Shift',ShiftSchema);
mongoose.model('Doctor',DoctorSchema);

mongoose.connect('mongodb://localhost:27017/PCU', function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('DB connected');
});

module.exports = mongoose;