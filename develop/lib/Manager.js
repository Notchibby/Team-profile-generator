const Employee = require('./Employee');

class Manager extends Employee{
    constructor (officeNumber){
        super(managerName, managerId, managerEmail)
        this.officeNumber = officeNumber;
    }

    getRole(){
        return Manager
    }
}

const officeNumber = 'officenumber'

module.exports = Manager;