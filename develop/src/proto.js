const cardarray = [
    {
        name: 'Dan',
        job: 'Manager',
        ID: '1',
        Email: 'dan@gmail.com',
        office_number: '999'
    },


    {
        name: 'Doug',
        job: 'Engineer',
        ID: '2',
        Email: 'Doug@gmail.com',
        github: 'Dougiscool'
    },

    {
        name: 'Chibbe',
        job: 'Intern',
        ID: '3',
        Email: 'chibbe@gmail.com',
        school: 'Usyd'
    }


]

const pagebody = document.getElementById('pagebody')


function rendercard(){
    
for(let i = 0; i < cardarray.length; i++){

    let targetcard = cardarray[i];
   
    const cardtitle = document.createElement('div')
    cardtitle.setAttribute('class', 'cardtitle')

    const cardheader = document.createElement('div')
    cardheader.setAttribute('class', 'cardheader')

    const cardbody = document.createElement('div')
    cardbody.setAttribute('class', 'cardbody')

    const bodycontent1 = document.createElement('div')
    bodycontent1.setAttribute('class', 'bodycontent')

    const bodycontent2 = document.createElement('div')
    bodycontent2.setAttribute('class', 'bodycontent')

    const bodycontent3 = document.createElement('div')
    bodycontent3.setAttribute('class', 'bodycontent')



    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const pid = document.createElement('p')
    const pemail = document.createElement('p')
    const pcontent = document.createElement('p')
    const aTag = document.createElement('a')
    const icon = document.createElement('i')

    

    if (targetcard.job === 'Manager'){
        icon.setAttribute('class', 'fa fa-mug-hot')
    }

    if (targetcard.job === 'Engineer'){
        icon.setAttribute('class', 'fa fa-glasses')
    }

    if (targetcard.job === 'Intern'){
        icon.setAttribute('class', 'fa fa-user-graduate')
    }

    h2.textContent = targetcard.name
    p.appendChild(icon).textContent = " " + targetcard.job
    cardheader.appendChild(h2)
    cardheader.appendChild(p)

    const id = bodycontent1.appendChild(pid)
    id.textContent = 'ID: ' + targetcard.ID
    
    aTag.setAttribute('href', 'mailto:' + targetcard.Email)
    pemail.textContent = 'Email: '
    aTag.textContent = targetcard.Email
    pemail.appendChild(aTag)
    bodycontent2.appendChild(pemail)
    console.log(pemail)

    if (targetcard.job === 'Manager'){
        pcontent.textContent = 'Office number: ' + targetcard.office_number
    }

    if (targetcard.job === 'Engineer'){
        pcontent.textContent = 'Github: ' + targetcard.github
    }

    if (targetcard.job === 'Intern'){
        pcontent.textContent = 'School: ' + targetcard.school
    }

    bodycontent3.appendChild(pcontent)

    cardbody.appendChild(bodycontent1)
    cardbody.appendChild(bodycontent2)
    cardbody.appendChild(bodycontent3)

    cardtitle.appendChild(cardheader)
    cardtitle.appendChild(cardbody)

    pagebody.appendChild(cardtitle)
}
}

rendercard()

