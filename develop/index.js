const inquirer = require('inquirer')
const fs = require ('fs')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const answersarray = [];

function managerQuestion(){
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
        console.log(answers);
        const newManager = new Manager(answers.Name, answers.Id, answers.Email, answers.officeNumber)
        answersarray.push(newManager)
        menu()

    })


}

function menu(){
    inquirer.prompt(  {
                type: 'list',
                name: 'teamMembers',
                message: 'choose your team member',
                choices: ['Engineer', 'Intern', 'I dont want anymore team members']
            })
            .then((answers) => {
                console.log(answers);
                if(answers.teamMembers === 'Engineer'){
                    engineer() 
                }
                if(answers.teamMembers === 'Intern'){
                    intern()
                }
                if(answers.teamMembers === 'I dont want anymore team members'){
                    
                    
                }
            })

}

function engineer(){
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
        console.log(answers)
        const newEnginner = new Engineer(answers.Name, answers.Id, answers.Email, answers.github)
        answersarray.push(newEnginner)
        menu ()
})

}

function intern(){
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
        console.log(answers)
        const newIntern = new Intern(answers.Name, answers.Id, answers.Email, answers.school)
        answersarray.push(newIntern)
        menu ()
})

    
}






function init() {
    managerQuestion()
}

// Function call to initialize app
init();






