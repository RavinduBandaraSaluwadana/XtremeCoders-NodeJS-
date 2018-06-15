var mongoose = require('../DBConfig/db.config');
var Schema = mongoose.model('Patient');
var Schema2 = mongoose.model('Transfer');

var TransferController = function () {
    this.insert = function(data) {
        return new Promise(function (resolve,reject) {
            var transfer = Schema2({
                patiant_id:data.patiant_id,
                name:data.name,
                age:data.age,
                ward_no:data.ward_no,
                admitted_date:data.admitted_date,
                Doctor:data.Doctor,
                issue:data.issue,
                Tretements:data.Tretements
            })
            transfer.save().then(function () {
                resolve({status:200,message:'Transfer details added'});

            }).catch(function (err) {
                reject({status:500,message:'Err : '+err});
            })

        })
    }


    this.getAll = function(){
        return new Promise(function (resolve,reject) {
            Schema.find().then(function (data) {
                resolve({status:200,message:data});

            }).catch(function (err) {
                reject({status:500,message:'Err : '+err});
            })

        })
    }

    this.update = function(name, data){
        return new Promise(function (resolve, reject) {
            schema.update({name:name},data).then(function(){
                resolve({status:200,message:"Transfered"});
            }).catch(function(err){
                reject({status:500,message:"Error "+err})
            })
        })
    }

}

module.exports = new TransferController();