interface IEmployee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export class Employee implements IEmployee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };

  constructor(employee: IEmployee) {
    this.id = employee.id;
    this.name = employee.name;
    this.username = employee.username;
    this.email = employee.email;
    this.address = employee.address;
  }
}
