var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/PCU");

autoIncrement.initialize(connection);

const DischargeSchema = new Schema({
    patiant_id:{
        type:String
    },
    name:{
        type:String
    },
    age:{
        type:String
    },
    ward_no:{
        type:String
    },
    admitted_date:{
        type:String
    },
    Dischargedate:{
      type:String
    },
    Doctor:{
        type:String
    },
    issue:{
        type:String
    },
    Tretements:{
        type:String
    }
})

DischargeSchema.plugin(autoIncrement.plugin, { model: 'Discharge', field: 'bedNo' });

module.exports = DischargeSchema;