const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost:27017/PCU");
autoIncrement.initialize(connection);

const DoctorSchema = new Schema({
    name : {
        type : String,
        required : true
    },

    specializedPriority : {
        type : String,
        required : true
    }
});

DoctorSchema.plugin(autoIncrement.plugin, 'Doctor');
module.exports = DoctorSchema;
