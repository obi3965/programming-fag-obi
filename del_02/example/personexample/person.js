class person {
    //the constructor method is invoked automatically
    constructor(){
        //properties
    console.log('new person is here')
    this.firstname = "unknown firstname";
    this.lastname = "unknown lastname";
    this.age = 0; 
    this.friend = null;
    
    
    };
    

    
   

    getFullName(){
        return this.firstname + ' ' + this.lastname;
    }
    introduceSelf(){
        return`hi my name is ${this.getFullName()} and i am ${this.introduceSelf()}`;
    }


    sayHiToPerson(otherPerson){

        if(this != otherPerson ){
            return`${this.firstname} say hi to ${otherPerson.firstname}`;
        }else{

            return'hi i am not ';
        }
      
    //   return`hello,${otherPerson.firstname}.how are you`;
      
    }
}
