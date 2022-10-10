//modules required to run the application
const inquirer = require('inquirer')
const fs = require('fs')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const generateHtml = require('./generateHtml')
const answersarray = [];


//function that generates the questions about the manager
function managerQuestion() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'What is the team managers name?',
        },

        {
            type: 'input',
            name: 'Id',
            message: 'What is the team managers ID?',
        },

        {
            type: 'input',
            name: 'Email',
            message: 'What is the team managers Email address?',
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team managers Office number?',
        },
    ])

        .then((answers) => {
            //creates a new class for the manager from answers to the question

            const newManager = new Manager(answers.Name, answers.Id, answers.Email, answers.officeNumber)
            //adds the answers to the manager question to an array
            answersarray.push(newManager)

            //calls the menu option after the manager question is finished
            menu()

        })


}

// menu question tha asks for the type of team member.
function menu() {
    inquirer.prompt({
        type: 'list',
        name: 'teamMembers',
        message: 'choose your team member',
        choices: ['Engineer', 'Intern', 'I dont want anymore team members']
    })
        .then((answers) => {
            if (answers.teamMembers === 'Engineer') {
                engineer()
            }
            if (answers.teamMembers === 'Intern') {
                intern()
            }
            if (answers.teamMembers === 'I dont want anymore team members') {

                //generates htmlpage with the answers from the prompt questions
                const htmlgenerator = generateHtml(answersarray)

                fs.writeFile('../develop/dist/dist.html', htmlgenerator, (err) =>
                    err ? console.log(err) : console.log('Successfully created index.html!'))
            }
        })

}

// generates questions about the engineer
function engineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'What is the Engineers name?',

        },

        {
            type: 'input',
            name: 'Id',
            message: 'What is the Engineers ID?',

        },

        {
            type: 'input',
            name: 'Email',
            message: 'What is the Engineers Email address?',

        },

        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineers github Username?',

        },


    ])

        .then((answers) => {
            //creates a new engineer class from the answers to the engineer questions
            const newEnginner = new Engineer(answers.Name, answers.Id, answers.Email, answers.github)

            //adds the new engineer to an array
            answersarray.push(newEnginner)

            // calls the menu
            menu()
        })

}

//generates questions about the intern
function intern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'What is the Interns name?',

        },

        {
            type: 'input',
            name: 'Id',
            message: 'What is the Interns ID?',

        },

        {
            type: 'input',
            name: 'Email',
            message: 'What is the Interns Email address?',

        },

        {
            type: 'input',
            name: 'school',
            message: 'What is the Interns School?',

        },

    ])

        .then((answers) => {

            //creates a new intern class using answers to the intern questions
            const newIntern = new Intern(answers.Name, answers.Id, answers.Email, answers.school)

            //adds new intern to an array
            answersarray.push(newIntern)

            //calls the menu
            menu()
        })


}




//function to initialize app
function init() {
    managerQuestion()
}

// Function call to initialize app
init();






