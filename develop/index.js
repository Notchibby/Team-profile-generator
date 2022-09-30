const inquirer = require('inquirer')
const fs = require ('fs')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const questions = [

    {
        type: 'input',
        name: 'managerName',
        message: 'What is the team managers name?',
    },

    {
        type: 'input',
        name: 'managerId',
        message: 'What is the team managers employee ID?',
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the team managers Email address?',
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the team managers Office number?',
    },

    {
        type: 'list',
        name: 'teamMembers',
        message: 'choose your team member',
        choices: ['Engineer', 'Intern', 'I dont want anymore team members']
    },

    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the Engineers name?',
        when: (answers) => answers.teamMembers === 'Engineer',
    },

    {
        type: 'input',
        name: 'engineerID',
        message: 'What is the Engineers ID?',
        when: (answers) => answers.teamMembers === 'Engineer',
    },

    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the Engineers Email address?',
        when: (answers) => answers.teamMembers === 'Engineer',
    },
    
    {
       type: 'input',
       name: 'github',
       message: 'What is the Engineers github Username?',
       when: (answers) => answers.teamMembers === 'Engineer'
    },


    {
        type: 'input',
        name: 'internName',
        message: 'What is the Interns name?',
        when: (answers) => answers.teamMembers === 'Intern',
    },

    {
        type: 'input',
        name: 'internID',
        message: 'What is the Interns ID?',
        when: (answers) => answers.teamMembers === 'Intern',
    },

    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the Interns Email address?',
        when: (answers) => answers.teamMembers === 'Intern',
    },

    {
        type: 'input',
        name: 'school',
        message: 'What is the Interns School?',
        when: (answers) => answers.teamMembers === 'Intern',
    },

    {
        type: 'list',
        name: 'newTeamMembers',
        message: 'choose another team member',
        choices: ['Engineer', 'Intern', 'I dont want anymore team members'],
         when: (answers) => answers.teamMembers === 'Intern',
       
    },
    
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
