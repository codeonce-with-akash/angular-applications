class Customer {

    firstName: string;
    lastName: string;

    //define a constructor
    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }

}

//let's create an instance
let myCustomer = new Customer("Akash", "Hiwale");

//myCustomer.firstName = "AKASH";
//myCustomer.lastName = "HIWALE";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
