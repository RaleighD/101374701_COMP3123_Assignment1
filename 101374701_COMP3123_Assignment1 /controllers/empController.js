const Employee = require('../models/empModel');

const EmpController = {
    async createEmployee(req, res) {
        try {
            const employee = new Employee(req.body);
            await employee.save();
            res.status(201).send({ message: 'Employee created successfully.', employee });
        } catch (error) {
            res.status(500).send({ message: 'Server error please try again.', error: error.message });
        }
    },

    async getEmployees(req, res) {
        try {
            const employees = await Employee.find();
            res.status(200).send(employees);
        } catch (error) {
            res.status(500).send({ message: 'Server error please try again.', error: error.message });
        }
    },

    async getEmployeeById(req, res) {
        try {
            const employee = await Employee.findById(req.params.eid);
            if (!employee) {
                return res.status(404).send({ message: 'Employee with that ID not found' });
            }
            res.status(200).send(employee);
        } catch (error) {
            res.status(500).send({ message: 'Server error please try again.', error: error.message });
        }
    },

    async updateEmployee(req, res) {
        try {
            const employee = await Employee.findByIdAndUpdate(req.params.eid, req.body, { new: true });
            if (!employee) {
                return res.status(404).send({ message: 'Employee with that ID not found' });
            }
            res.status(200).send({ message: 'Employee updated successfully', employee });
        } catch (error) {
            res.status(500).send({ message: 'Server error please try again.', error: error.message });
        }
    },

    async deleteEmployee(req, res) {
        try {
            const employee = await Employee.findByIdAndDelete(req.params.eid);
            if (!employee) {
                return res.status(404).send({ message: 'Employee with that ID not found' });
            }
            res.sendStatus(204);
        } catch (error) {
            res.status(500).send({ message: 'Server error please try again.', error: error.message });
        }
    }
};

module.exports = EmpController;