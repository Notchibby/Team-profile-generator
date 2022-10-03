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
                    module.exports = answersarray;
                    const htmlgenerator = generateHtml()
                    
                    fs.writeFileSync('../develop/dist/dist.html', htmlgenerator, (err) =>
                    err ? console.log(err) : console.log('Successfully created index.html!'))
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


const generateHtml = () =>
`<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8" />
    <title>Team profile generator</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>
    <div id="pagebody">

        <div class="cardtitle">
            <div class="cardheader">
                <h2>Dan</h2>
                <p><i class="fa fa-mug-hot"> Manager</i></p>
            </div>
            <div class="cardbody">
                <div class="bodycontent">
                <p>ID: 1</p>
                </div>
                <div class="bodycontent">
                <p>Email: <a href="mailto:dan@gmail.com">dan@gmail.com</a></p>
                </div>
                <div class="bodycontent">
                <p>Office number: 999 </p>
                </div>
            </div>
        </div>

        <div class="cardtitle">
            <div class="cardheader">
                <h2>Doug</h2>
                <p><i class="fa fa-glasses"> Engineer</i></p>
            </div>
            <div class="cardbody">
                <div class="bodycontent">
                <p>ID: 2</p>
                </div>
                <div class="bodycontent">
                <p>Email: <a href="mailto:Doug@gmail.com">Doug@gmail.com</a></p>
                </div>
                <div class="bodycontent">
                <p>Github: Dougiscool </p>
                </div>
            </div>
        </div>

            <div class="cardtitle">
                <div class="cardheader">
                    <h2>Chibbe</h2>
                    <p><i class="fa fa-user-graduate"> Intern</i></p>
                </div>
                <div class="cardbody">
                    <div class="bodycontent">
                    <p>ID: 3</p>
                    </div>
                    <div class="bodycontent">
                    <p>Email: <a href="mailto:Chibbe@gmail.com">Chibbe@gmail.com</a></p>
                    </div>
                    <div class="bodycontent">
                    <p>School: Usyd </p>
                    </div>
                </div>
            
            </div>

    </div>
   
</body>

</html>`;



function init() {
    managerQuestion()
}

// Function call to initialize app
init();






