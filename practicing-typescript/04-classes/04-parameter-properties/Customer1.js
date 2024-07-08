"use strict";
var Customer1 = /** @class */ (function () {
    //private _firstName: string;
    //private _lastName: string;
    //define a constructor
    /*
    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    */
    function Customer1(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
