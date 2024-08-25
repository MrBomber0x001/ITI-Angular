import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 6,
      title: 'MacBook Pro',
      description:
        'MacBook Pro 2021 with mini-LED display may launch between September, November',
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: 'Apple',
      category: 'laptops',
      categoryId: 1,
      thumbnail:
        'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg',
      images: [
        'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg',
        'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg',
        'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg',
        'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg',
      ],
    },
    {
      id: 7,
      title: 'Samsung Galaxy Book',
      description:
        'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: 'Samsung',
      category: 'laptops',
      categoryId: 1,
      thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
      images: [
        'https://img.freepik.com/free-photo/black-white-beauty-product_23-2151307283.jpg',
      ],
    },
    {
      id: 17,
      title: 'Tree Oil 30ml',
      description:
        'Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,',
      price: 12,
      discountPercentage: 4.09,
      rating: 4.52,
      stock: 78,
      brand: 'Hemani Tea',
      category: 'skincare',
      categoryId: 2,
      thumbnail: 'https://i.dummyjson.com/data/products/17/thumbnail.jpg',
      images: [
        'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://i.dummyjson.com/data/products/17/1.jpg',
        'https://i.dummyjson.com/data/products/17/2.jpg',
        'https://i.dummyjson.com/data/products/17/3.jpg',
        'https://i.dummyjson.com/data/products/17/thumbnail.jpg',
      ],
    },
    {
      id: 19,
      title: 'Skin Beauty Serum.',
      description:
        'Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m',
      price: 46,
      discountPercentage: 10.68,
      rating: 4.42,
      stock: 54,
      brand: 'ROREC White Rice',
      category: 'skincare',
      categoryId: 2,
      thumbnail: 'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
      images: [
        'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg',
      ],
    },
    {
      id: 29,
      title: 'Handcraft Chinese style',
      description:
        'Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate',
      price: 60,
      discountPercentage: 15.34,
      rating: 4.44,
      stock: 0,
      brand: 'luxury palace',
      category: 'home-decoration',
      categoryId: 4,
      thumbnail: 'https://i.dummyjson.com/data/products/29/thumbnail.webp',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEw2ce40BkWdXvgMffW8BefaU8jogoAzSNDA&s',
        'https://i.dummyjson.com/data/products/29/1.jpg',
        'https://i.dummyjson.com/data/products/29/2.jpg',
        'https://i.dummyjson.com/data/products/29/3.webp',
        'https://i.dummyjson.com/data/products/29/4.webp',
        'https://i.dummyjson.com/data/products/29/thumbnail.webp',
      ],
    },
    {
      id: 26,
      title: 'Plant Hanger For Home',
      description:
        'Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf',
      price: 45,
      discountPercentage: 17.86,
      rating: 4.08,
      stock: 131,
      brand: 'Boho Decor',
      category: 'home-decoration',
      categoryId: 4,
      thumbnail: 'https://i.dummyjson.com/data/products/26/thumbnail.jpg',
      images: [
        'https://img.freepik.com/premium-psd/product-showcase-background_597316-255.jpg',
        'https://i.dummyjson.com/data/products/26/1.jpg',
        'https://i.dummyjson.com/data/products/26/2.jpg',
        'https://i.dummyjson.com/data/products/26/3.jpg',
        'https://i.dummyjson.com/data/products/26/4.jpg',
        'https://i.dummyjson.com/data/products/26/5.jpg',
        'https://i.dummyjson.com/data/products/26/thumbnail.jpg',
      ],
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  updateStock(productId: number, quantity: number): void {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      product.stock -= quantity;
    }
  }
}
