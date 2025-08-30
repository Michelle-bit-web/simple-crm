import { Timestamp } from "rxjs";

export class User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: number | Date;
  street: string;
  zip: number;
  city: string;

  constructor(obj?: any){
    this.id = obj ? obj.id : '';
    this.firstName =  obj ? obj.firstName : '';
    this.lastName =  obj ? obj.lastName : '';
    this.email =  obj ? obj.email : '';
    this.birthDate =  obj ? obj.birthDate : Date.now();
    this.street =  obj ? obj.street : '';
    this.zip =  obj ? obj.zip : 0;
    this.city =  obj ? obj.city : '';
  }
    
  toJSON() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthDate: this.birthDate,
      street: this.street,
      zip: this.zip,
      city: this.city,
    };
  }

  static JsonToUser(json: any): User {
    const user = new User();
    user.id = json.id;
    user.firstName = json.firstName;
    user.lastName = json.lastName;
    user.email = json.email;
    user.street = json.street;
    user.zip = json.zip;
    user.city = json.city;
    user.birthDate = json.birthDate;
    return user;
  }
}