const express = require('express');
var Routes = express.Router();
var patientRoutes = require('./Routes/patientRoutes');
var bedRoutes = require('./Routes/BedRoutes');
var examRoutes = require('./Routes/DoctorExamsRoutes');

Routes.use('/patient/',patientRoutes);
Routes.use('/bed/', bedRoutes);
Routes.use('/docexam/',examRoutes);
module.exports = Routes;