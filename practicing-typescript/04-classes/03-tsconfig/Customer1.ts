class Customer1 {

    private _firstName: string;
    private _lastName: string;

    //define a constructor
    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}

//let's create an instance
let myCust = new Customer1("Akash", "Hiwale");

//myCustomer.firstName = "AKASH";
//myCustomer.lastName = "HIWALE";

console.log(myCust.firstName);
console.log(myCust.lastName);
