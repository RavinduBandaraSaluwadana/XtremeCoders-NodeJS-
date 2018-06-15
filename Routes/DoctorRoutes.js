var express = require('express');
var router = express.Router();
var controller = require('../Controllers/DoctorController');

router.post('/', function (req, res) {
    controller.add(req.body).then(function (data) {
        console.log("ahgh " + data);
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        console.log(err);
        res.status(500).send(err.message);
    });
});

router.get('/:priority', function (req, res) {
    controller.getByPriority(req.params).then(function (data) {
        res.status(data.status).send(data.data);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

router.get('/', function (req, res) {
    controller.getId().then(function (data) {
        res.status(data.status).send(data.data);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

module.exports = router;