const Employee = require('../lib/Employee');



describe('Employee', () =>{


    describe('Initialization', () =>{
        it('should create an object with a name, id and email', () => {

            const employee = new Employee('Dan', '1', 'Dan@gmail.com');

            expect(employee.name).toEqual('Dan');
            expect(employee.id).toEqual('1')
            expect(employee.email).toEqual('Dan@gmail.com')
        });

        it('should return the name, id, email and role when the function getname, getid, getemail and getrole is called', () => {
           
            const employee = new Employee('Dan', '1', 'Dan@gmail.com')

            expect(employee.getName()).toBe('Dan')
            expect(employee.getId()).toBe('1')
            expect(employee.getEmail()).toBe('Dan@gmail.com')
            expect(employee.getRole()).toBe('Employee')
        })


    })
})
