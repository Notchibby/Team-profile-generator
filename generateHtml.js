//function that generates the html page
const generateHtml = (answersarray) => {
    const htmlcard = [];
    for (let i = 0; i < answersarray.length; i++) {
        
        //if a manager was selected, create a this html body using the details of the manager
        if (answersarray[i].getRole() === 'Manager') {
            htmlcard.push(`<div class="cardtitle">
        <div class="cardheader">
            <h2>${answersarray[i].getName()}</h2>
            <p><i class="fa fa-mug-hot"> Manager</i></p>
        </div>
        <div class="cardbody">
            <div class="bodycontent">
            <p>ID: ${answersarray[i].getId()}</p>
            </div>
            <div class="bodycontent">
            <p>Email: <a href="mailto:${answersarray[i].getEmail()}">${answersarray[i].getEmail()}</a></p>
            </div>
            <div class="bodycontent">
            <p>Office number: ${answersarray[i].getOfficeNumber()} </p>
            </div>
        </div>
    </div>`)

        }

        //if an Engineer was selected, create a this html body using the details of the Engineer
        if (answersarray[i].getRole() === 'Engineer') {
            htmlcard.push(`
        <div class="cardtitle">
            <div class="cardheader">
                <h2>${answersarray[i].getName()}</h2>
                <p><i class="fa fa-glasses"> Engineer</i></p>
            </div>
            <div class="cardbody">
                <div class="bodycontent">
                <p>ID: ${answersarray[i].getId()}</p>
                </div>
                <div class="bodycontent">
                <p>Email: <a href="mailto:${answersarray[i].getEmail()}">${answersarray[i].getEmail()}</a></p>
                </div>
                <div class="bodycontent">
                <p>Github: <a href="https://www.github.com/${answersarray[i].getGithub()}" target="_blank">${answersarray[i].getGithub()}</a></p>
                </div>
            </div>
        </div>
`)


        }

        //if an Intern was selected, create a this html body using the details of the Intern
        if (answersarray[i].getRole() === 'Intern') {
            htmlcard.push(`<div class="cardtitle">
        <div class="cardheader">
            <h2>${answersarray[i].getName()}</h2>
            <p><i class="fa fa-user-graduate"> Intern</i></p>
        </div>
        <div class="cardbody">
            <div class="bodycontent">
            <p>ID: ${answersarray[i].getId()}</p>
            </div>
            <div class="bodycontent">
            <p>Email: <a href="mailto:${answersarray[i].getEmail()}">${answersarray[i].getEmail()}</a></p>
            </div>
            <div class="bodycontent">
            <p>School: ${answersarray[i].getSchool()} </p>
            </div>
        </div>
    
    </div>
`)

        }

    }


    return `<!DOCTYPE html>
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

    ${htmlcard}

    </div>
   
</body>

</html>`;
}

module.exports = generateHtml