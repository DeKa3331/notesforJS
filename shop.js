class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Cart {
  constructor() {
    this.items = []; // { product: Product, quantity: number }
  }

  addItem(product, quantity) {
    this.items.push({ product, quantity });
  }

  totalPrice() {
    return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0); //zmniejsza tabele do jednej wartosci
  }

    listItems() {
  const descriptions = [];

  for (const item of this.items) {
    const desc = item.product.name + " x" + item.quantity;
    descriptions.push(desc);
  }

  return descriptions.join(", ");
}
}

// Przykład użycia:
const apple = new Product('Apple', 2);
const bread = new Product('Bread', 5);

const cart = new Cart();
cart.addItem(apple, 3);
cart.addItem(bread, 2);

console.log('Items in cart:', cart.listItems());
console.log('Total price:', cart.totalPrice());
