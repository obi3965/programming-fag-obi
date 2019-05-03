let person1 = new person();
person1.firstname = "obi";
person1.lastname = "ahmad";
person1.age = "20"
console.log(person1)

// let introduction = person1.introduceSelf()
    //     console.log(introduction)


let person2 = new person();
person2.firstname = "obaid";
person2.lastname = "jan";
person2.age = "30"
console.log(person2)

let greeting = person1.sayHiToPerson(person2)

//it return the value here
console.log(greeting)


person1.friend = person2;
person2.friend = person1;
    //     console.log(introduction)
// let person2 = new person();
// person1.firstname = "obi";
// person1.lasttname = "123";
// console.log(person2)
