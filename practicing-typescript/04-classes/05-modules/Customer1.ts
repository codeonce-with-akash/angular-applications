export class Customer1 {

    //private _firstName: string;
    //private _lastName: string;

    //define a constructor
    /*
    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    */

    constructor(private _firstName: string, private _lastName: string) {
        
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


