const Manager = require('../lib/Manager');

describe('Manager', () =>{


    describe('Initialization', () =>{
        it('should create an object with a name, id, email and officenumber', () => {

            const manager = new Manager('John', '4', 'John@gmial.com', '00123');

            expect(manager.name).toEqual('John');
            expect(manager.id).toEqual('4')
            expect(manager.email).toEqual('John@gmial.com')
            expect(manager.officeNumber).toEqual('00123')
        });

        it('should return the officenumber and role when the funtion getofficenumber and getrole is called', () => {
            const manager = new Manager('John', '4', 'John@gmial.com', '00123')

            expect(manager.getOfficeNumber()).toBe('00123')
           
            expect(manager.getRole()).toBe('Manager')
        })


    })
})