const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/PCU");

autoIncrement.initialize(connection);

const BedSchema = new Schema({
    availability:{
        type: Boolean,
        required: true,
        default: true
    },
    patientNo: {
        type: String,
        required: false,
        default: ""
    }

});
BedSchema.plugin(autoIncrement.plugin, { model: 'Bed', field: 'bedNo' });

module.exports = BedSchema;