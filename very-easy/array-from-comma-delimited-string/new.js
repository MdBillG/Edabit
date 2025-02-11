const person ={
    fullName :function(state,pin, country){
        console.log(this.firstName + " " + this.lastName + "  "+state+" "+pin+" "+country);
    }

}


const person1 = {
    firstName: "John",
    lastName: "Doe"
}

const person2 = {
    firstName: "Mary",
    lastName: "Smith"
}


person.fullName.apply(person1, ["CA",'577228','US'])
// person.fullName.call(person2)