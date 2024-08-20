export interface IProduct {
  id: number;
  productName: string;
  price: number;
  description: string;
}

export class Product implements IProduct {
  id: number;
  productName: string;
  price: number;
  description: string;

  constructor(product: IProduct) {
    this.id = product.id;
    this.productName = product.productName;
    this.price = product.price;
    this.description = product.description;
  }

  hasDiscount(): boolean {
    return true;
  }

  discount(): number {
    return this.price * 0.9; // 10% discount
  }

  show(): string {
    return `ID: ${this.id}, Product Name: ${
      this.productName
    }, Price: $${this.price.toFixed(2)}, Description: ${this.description}`;
  }
}

const productData: IProduct = {
  id: 1,
  productName: "Awesome Product",
  price: 99.99,
  description: "This is an amazing product.",
};

const product = new Product(productData);
console.log(product.show()); // Output: ID: 1, Product Name: Awesome Product, Price: $89.99, Description: This is an amazing product.
