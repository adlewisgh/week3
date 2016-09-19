var person= {
    firstName:"Andrew",
    lastName:"Lewis",
    phone:"222 222 2222",
    birthday:"June 29th",
    fullname: function() {
        return this.firstName + " " + this.lastName
    }
};

function printDetails (p) {
    if (typeof p.email !="undefined") {
        console.log(p.email);
    }
    
    console.log(p.firstName);
    console.log(p.phone);
    console.log(p.birthday);
    console.log(p.fullname());
    
}

printDetails(person);