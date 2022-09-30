class Employee {
    constructor(name, id, email){
     this.name = name;
     this.id = id;
     this.email = email;   
    }
    getEmail(email){
        return email
    };
    getId(id){
        return id
    }
    getRole(){
        return Employee
    }
}



module.exports = Employee;