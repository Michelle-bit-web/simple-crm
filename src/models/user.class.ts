import { Timestamp } from "rxjs";

export class User {
    firstName: string;
    lastName: string;
    birthDate: number | Date;
    street: string;
    zip: number;
    city: string;

    constructor(obj?: any){
        this.firstName =  obj ? obj.firstName : '';
        this.lastName =  obj ? obj.lastName : '';
        this.birthDate =  obj ? obj.birthDate : Date.now();
        this.street =  obj ? obj.street : '';
        this.zip =  obj ? obj.zip : 0;
        this.city =  obj ? obj.city : '';
    } 
}