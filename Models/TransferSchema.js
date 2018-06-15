var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/PCU");

autoIncrement.initialize(connection);

const TransferSchema = new Schema({
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
    issue:{
        type:String
    },
    Tretements:{
        type:String
    }
})

module.exports = TransferSchema;