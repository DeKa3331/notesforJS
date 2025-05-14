class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Cart {
  constructor() {
    this.items = [];      // tablica produktów (Product)
    this.quantities = []; // tablica ilości odpowiadających produktom
  }

  addItem(product, quantity) {
    this.items.push(product);
    this.quantities.push(quantity);
  }

  totalPrice() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i].price * this.quantities[i];
    }
    return sum;
  }

  listItems() {
    let descriptions = [];
    for (let i = 0; i < this.items.length; i++) {
      descriptions.push(this.items[i].name + " x" + this.quantities[i]);
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

console.log('Items in cart:', cart.listItems());     // "Apple x3, Bread x2"
console.log('Total price:', cart.totalPrice());      // 16
