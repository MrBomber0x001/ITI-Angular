import { Employee } from "./task5";
export class Manager extends Employee {
  viewEmployeeAddress(): void {
    console.log(
      `Employee address: ${this.address.street}, ${this.address.suite}, ${this.address.city}, ${this.address.zipcode}`
    );
  }
}
