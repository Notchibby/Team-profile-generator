const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }
    getSchool(){
        return this.School
    }

    getRole(){
        return 'Intern'
    }
}

const school = 'schoolname'

module.exports = Intern;