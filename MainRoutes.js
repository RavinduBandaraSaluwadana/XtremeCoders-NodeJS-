const express = require('express');
var Routes = express.Router();
var patientRoutes = require('./Routes/patientRoutes');
var bedRoutes = require('./Routes/BedRoutes');
var examRoutes = require('./Routes/DoctorExamsRoutes');
var dischargeRoutes = require('./Routes/DischargeRoutes');
var TransferRoutes = require('./Routes/TransferRoute');
var shiftRoutes = require('./Routes/ShiftRoutes');
var doctorRoutes = require('./Routes/DoctorRoutes');

Routes.use('/patient/',patientRoutes);
Routes.use('/bed/', bedRoutes);
Routes.use('/docexam/',examRoutes);
Routes.use('/discharge/',dischargeRoutes);
Routes.use('/transfer/',TransferRoutes);
Routes.use('/shift/', shiftRoutes);
Routes.use('/doctor/',doctorRoutes);

module.exports = Routes;