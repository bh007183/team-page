// TODO: Write code to define and export the Employee class
    const emp = "Employee"
    function Employee(name, id, email){
        this.name = name
        this.id = id
        this.email = email

    }
    Employee.prototype.getName = function (){
        return(this.name)
    }
    Employee.prototype.getid = function (){
        return(this.id)
    }
    Employee.prototype.getEmail = function (){
        return(this.emailemail)
    }
    Employee.prototype.getRole = function (){
         return("Employee")
        
    }


  const e = new Employee("Alice", 1, "test@test.com")
  module.exports = Employee


        
 

    





 




 
