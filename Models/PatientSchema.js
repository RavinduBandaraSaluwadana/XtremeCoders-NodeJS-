const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/PCU");

autoIncrement.initialize(connection);

const PatientSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    age :{
        type: Number,
        required: true
    },
    issue : {
        type: String,
        required: true
    },
    priorityLevel:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    admittedBy: {
        type: String,
        required: false
    },
    admittedDate:{
        type: Date,
        required: true
    },
    status:{
        type: String,
        required: true,
        default: "registered"
    },
    admissionNo:{
        type: Number,
        required: false
    },
    contactNo:{
        type: String,
        required: false
    }
});

PatientSchema.plugin(autoIncrement.plugin, 'Patient');
module.exports = PatientSchema;