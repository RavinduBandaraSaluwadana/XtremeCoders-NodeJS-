const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShiftSchema = new Schema({
    employeeId : {
        type : String,
        required : true
    },

    toTime : {
        type : String,
        required : true
    },

    fromTime : {
        type : String,
        required : true
    },

    toDate : {
        type : Date,
        required : true
    },

    fromDate : {
        type : Date,
        required : true
    }
});

module.exports = ShiftSchema;