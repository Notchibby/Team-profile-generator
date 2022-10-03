const Engineer = require('../lib/Engineer');

describe('Engineer', () =>{


    describe('Initialization', () =>{
        it('should create an object with a name, id, email and github', () => {

            const engineer = new Engineer('Doug', '2', 'Doug@gmail.com', 'Dougiscool');

            expect(engineer.name).toEqual('Doug');
            expect(engineer.id).toEqual('2')
            expect(engineer.email).toEqual('Doug@gmail.com')
            expect(engineer.github).toEqual('Dougiscool')
        });

        it('should return the github and role when the funtion getgithub and getrole is called', () => {

            const engineer = new Engineer('Doug', '2', 'Doug@gmail.com', 'Dougiscool');


            expect(engineer.getGithub()).toBe('Dougiscool')
           
            expect(engineer.getRole()).toBe('Engineer')
        })


    })
})
