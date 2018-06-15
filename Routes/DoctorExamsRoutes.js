var express = require('express');
var router = express.Router();
var controller = require('../Controllers/DoctorExamsController');

router.post('/', function (req, res) {
   // console.log("aaaa");
    controller.addExam(req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(500).send(err.message);
    });
});

router.get('/',function(req,res){

    controller.getAllRecords().then(function(data){
        res.status(data.status).send(data.data);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
});




router.get('/:patientid',function(req,res){

    controller.getByID(req.params.patientid).then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
});



router.put('/:patientid', function (req, res) {
    controller.updatePatient(req.params.patientid, req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});



module.exports = router;