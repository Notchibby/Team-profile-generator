const inquirer = require('inquirer')
const fs = require ('fs')
// const Employee = require('./lib/Employee')
// const Engineer = require('./lib/Engineer')
// const Intern = require('./lib/Intern')
// const Manager = require('./lib/Manager')

const questions = [
   {
        type: 'list',
        name: 'teamMember',
        message: 'Choose your team member :',
        choices: ['None', 'Manager', 'Engineer', 'Intern'],
        default: 'mongoDB'
    }, {
       type: 'input',
       name: 'name',
       message: 'What is your name?',
       when: (answers) => answers.teamMember === 'Manager'
    }
    
]

function init() {
    inquirer
.prompt(questions)
.then((answers) => {
    console.log(answers);
})
}

// Function call to initialize app
init();
