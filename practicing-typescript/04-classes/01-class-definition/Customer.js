var Customer = /** @class */ (function () {
    //define a constructor
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//let's create an instance
var myCustomer = new Customer("Akash", "Hiwale");
//myCustomer.firstName = "AKASH";
//myCustomer.lastName = "HIWALE";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
