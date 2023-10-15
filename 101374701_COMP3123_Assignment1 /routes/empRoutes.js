const express = require('express');
const EmployeeController = require('../controllers/empController');
const router = express.Router();

router.post('/', EmployeeController.createEmployee);

router.get('/:eid', EmployeeController.getEmployeeById);

router.put('/:eid', EmployeeController.updateEmployee);

router.delete('/:eid', EmployeeController.deleteEmployee);

router.get('/', EmployeeController.getEmployees);

module.exports = router;