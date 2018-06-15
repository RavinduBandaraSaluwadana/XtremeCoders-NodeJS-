var express = require('express');
var router = express.Router();
var TransferController = require('../Controllers/TransferController');

router.post('/',function (req,res) {
    TransferController.insert(req.body).then(function (data) {
        res.status(data.status).send({message:data.message});

    }).catch(function (err) {
        res.status(500).send(err.message);
    })

})

router.get('/',function (req,res) {
    TransferController.getAll().then(function (data) {
      res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    })

})

router.put('/:id',function(req,res){
    TransferController.update(req.params.name,req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
})

module.exports = router;