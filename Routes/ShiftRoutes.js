var express = require('express');
var router = express.Router();
var controller = require('../Controllers/ShiftController');

router.post('/', function (req, res) {
    controller.addShift(req.body).then(function (data) {
        console.log("ahgh " + data);
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        console.log(err);
        res.status(500).send(err.message);
    });
});

router.get('/', function (req, res) {
    controller.getAllShifts().then(function (data) {
        res.status(data.status).send(data.data);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

router.get('/:id', function (req, res) {
    controller.getShiftsById(req.params.id).then(function (data) {
        res.status(data.status).send(data.data);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

router.put('/:id', function (req, res) {
    console.log("inside put");
    controller.updateShift(req.params.id, req.body).then(function (data) {
        console.log("llll");
        res.status(data.status).send(data.message);
        console.log("done");
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

router.delete('/:id', function (req, res) {
    controller.deleteShift(req.params.id).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});


module.exports = router;