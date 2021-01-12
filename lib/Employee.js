// TODO: Write code to define and export the Employee class

    function Employee(name, id, email){
        this.name = name
        this.id = id
        this.email = email

        this.getName = () => {
            return(name)
        }
        this.getid = () => {
            return(id)
        }
        this.getEmail = () => {
            return(email)
        }
        this.getRole = () => {
            return "Employee"
        }
    }


  const e = new Employee("Alice", 1, "test@test.com")
  exports.Employee = Employee
  console.log(e.name)

        
 

    





 




 
