var Customer1 = /** @class */ (function () {
    //define a constructor
    function Customer1(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer1.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer1.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer1;
}());
//let's create an instance
var myCust = new Customer1("Akash", "Hiwale");
//myCustomer.firstName = "AKASH";
//myCustomer.lastName = "HIWALE";
console.log(myCust.firstName);
console.log(myCust.lastName);
