const Intern = require('../lib/Intern');

describe('Intern', () =>{


    describe('Initialization', () =>{
        it('should create an object with a name, id, email and github', () => {

            const intern = new Intern('chibbe', '3', 'chibbe@gmail.com', 'Usyd');

            expect(intern.name).toEqual('chibbe');
            expect(intern.id).toEqual('3')
            expect(intern.email).toEqual('chibbe@gmail.com')
            expect(intern.school).toEqual('Usyd')
        });

        it('should return the school and role when the funtion getschool and getrole is called', () => {
            const intern = new Intern('chibbe', '3', 'chibbe@gmail.com', 'Usyd');

            expect(intern.getSchool()).toBe('Usyd')
           
            expect(intern.getRole()).toBe('Intern')
        })


    })
})
