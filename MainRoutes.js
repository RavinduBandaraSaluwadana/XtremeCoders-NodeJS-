const express = require('express');
var Routes = express.Router();
var patientRoutes = require('./Routes/patientRoutes');
var bedRoutes = require('./Routes/BedRoutes');
var examRoutes = require('./Routes/DoctorExamsRoutes');
var dischargeRoutes = require('./Routes/DischargeRoutes');
var TransferRoutes = require('./Routes/TransferRoute');

Routes.use('/patient/',patientRoutes);
Routes.use('/bed/', bedRoutes);
Routes.use('/docexam/',examRoutes);
Routes.use('/discharge/',dischargeRoutes);
Routes.use('/transfer/',TransferRoutes);

module.exports = Routes;