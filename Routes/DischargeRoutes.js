var express = require('express');
var router = express.Router();
var controller = require('../Controllers/DischargeController');

router.post('/',function (req,res) {
    controller.insert(req.body).then(function (data) {
        res.status(data.status).send({message:data.message});

    }).catch(function (err) {
        res.status(500).send(err.message);
    })

})

router.delete('/:id', function (req, res) {
    controller.deletePatient(req.params.id).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

router.get('/:id', function (req, res) {
    controller.getSingle(req.params.name).then(function (data) {
        res.status(data.status).send(data.data);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

module.exports = router;