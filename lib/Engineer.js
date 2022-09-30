const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github){
        super(engineerName, engineerId, engineerEmail)
        this.github = github;
    }
    
    getGithub(github){
        return github
    }
    getRole(){
        return Engineer
    }
}

const github = 'mine';


module.exports = Engineer;