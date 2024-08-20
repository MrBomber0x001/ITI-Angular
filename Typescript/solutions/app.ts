import { numericArray } from "./task1";
import { mixedArray } from "./task2";
import { numberOrBoolean } from "./task3";
import { add } from "./task4";
import { Employee } from "./task5";
import { Manager } from "./task6";
import { Product, IProduct } from "./task7";

async function main() {
  // Task 1
  console.log("Task 1:");
  console.log(numericArray);

  // Task 2
  console.log("Task 2:");
  console.log(mixedArray);

  // Task 3
  console.log("Task 3:");
  console.log(numberOrBoolean);

  // Task 4
  console.log("Task 4:");
  console.log(add(2, 3));

  // Task 5
  console.log("Task 5:");
  const employeeData = {
    id: 1,
    name: "Yousef Meska",
    username: "meska54",
    email: "yousefmeska123@gmail.com",
    address: {
      street: "26th district",
      suite: "Apt. 556",
      city: "Cairo",
      zipcode: "32515-5815",
      geo: {
        lat: "30.3159",
        lng: "30.5147",
      },
    },
  };
  const employee = new Employee(employeeData);
  console.log(employee);

  // Task 6
  console.log("Task 6:");
  const manager = new Manager(employeeData);
  manager.viewEmployeeAddress();

  // Task 7
  console.log("Task 7:");
  const productData: IProduct = {
    id: 1,
    productName: "Product X",
    price: 99.99,
    description: "This is a description of the Product",
  };
  const product = new Product(productData);
  console.log(product.show());
}

main();
