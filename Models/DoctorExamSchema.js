const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//var autoIncrement = require('mongoose-auto-increment');

//var connection = mongoose.createConnection("mongodb://localhost:27017/PCU");

//autoIncrement.initialize(connection);

const DoctorExamSchema = new Schema({
    patientid:{
        type:Number,
        required:true},

    name: {
        type: String,
        required: true,
    },
    complaints:{
        type: String,
        required: false,
    },
    allergies: {
        type: String,
        required: false,
    },
    physicalExaminations: {
        type: String,
        required: false,
    },
    treatments: {
        type: String,
        required: false,
    },
    drugs: {
        type: String,
        required: false,
    }

});
//DoctorExamSchema.plugin(autoIncrement.plugin, { model: 'DoctorExam', field: 'id' });
//var DoctorExam =  mongoose.model('doctorexam',DoctorExamSchema);
module.exports = DoctorExamSchema;