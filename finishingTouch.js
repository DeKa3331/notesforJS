// 13. Inheritance example with Animals
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}

// 14. Prototypal extension: Array.sum and Array.avg
Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0);
};

Array.prototype.avg = function () {
  return this.length ? this.sum() / this.length : 0;
};

// 15. Closure for a private bank account
function createAccount(owner, initialBalance) {
  let balance = initialBalance;
  return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            if (amount > balance) return "Insufficient funds";
            balance -= amount;
            return balance;
        },
        getBalance() {
            return `${owner}'s balance: ${balance}`;
        }
  };
}

// ==== MAIN TEST SECTION EXTENDED ====
function main() {
  // Previous tests...

  // 13
  const dog = new Dog("Burek");
  const cat = new Cat("Filemon");
  const cow = new Animal("MUMU")
  console.log(dog.speak());
  console.log(cat.speak());
  console.log(cow.speak());

  // 14
  const arr = [1, 2, 3, 4, 5];
  console.log("Sum:", arr.sum());
  console.log("Avg:", arr.avg());

  // 15
  const account = createAccount("Kasia", 1000);
  console.log(account.deposit(200)); // 1200
  console.log(account.withdraw(500)); // 700
  console.log(account.getBalance()); // "Kasia's balance: 700"
}

main();
