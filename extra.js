// 1. Rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
}

// 2. Student
class Student {
  constructor(name) {
    this.name = name;
    this.grades = [];
  }
  addGrade(grade) {
    this.grades.push(grade);
  }
  average() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((a, b) => a + b, 0);
    return sum / this.grades.length;
  }
  hasPassed() {
    return this.average() >= 3.0;
  }
}

// 3. Library
class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    // book: { title: string, author: string }
    this.books.push(book);
  }
  findBooksByAuthor(author) {
    return this.books.filter(book => book.author === author);
  }
}

// 4. BankAccount
class BankAccount {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
  }
  deposit(amount) {
    if (amount > 0) this.balance += amount;
  }
  withdraw(amount) {
    if (amount > 0 && this.balance >= amount) {
      this.balance -= amount;
      return true;
    }
    return false;
  }
  getBalance() {
    return this.balance;
  }
}

// 5. TodoList
class TodoList {
  constructor() {
    this.tasks = [];
  }
  addTask(description) {
    this.tasks.push({ description, done: false });
  }
  completeTask(index) {
    if (this.tasks[index]) this.tasks[index].done = true;
  }
  getPendingTasks() {
    return this.tasks.filter(task => !task.done);
  }
}

// 6. TemperatureConverter
class TemperatureConverter {
  static celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  static fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
}

// 7. ShoppingCart (zwiększa ilość jeśli produkt już istnieje)
class ShoppingCart {
  constructor() {
    this.items = []; // { product: Product, quantity: number }
  }
  addItem(product, quantity) {
    const found = this.items.find(item => item.product.name === product.name);
    if (found) {
      found.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }
  totalPrice() {
    return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }
  listItems() {
    return this.items.map(item => `${item.product.name} x${item.quantity}`).join(", ");
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// 8. Point
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  distanceTo(otherPoint) {
    const dx = this.x - otherPoint.x;
    const dy = this.y - otherPoint.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}

// 9. Quiz
class Quiz {
  constructor() {
    this.questions = []; // { question: string, answer: string }
  }
  addQuestion(question, answer) {
    this.questions.push({ question, answer });
  }
  checkAnswer(questionIndex, answer) {
    if (!this.questions[questionIndex]) return false;
    return this.questions[questionIndex].answer === answer;
  }
}

// 10. Counter
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  reset() {
    this.count = 0;
  }
  getValue() {
    return this.count;
  }
}function main() {
  console.log("1. Rectangle");
  const rect = new Rectangle(5, 10);
  console.log("Area:", rect.area());          // 50
  console.log("Perimeter:", rect.perimeter()); // 30

  console.log("\n2. Student");
  const student = new Student("Jan");
  student.addGrade(4);
  student.addGrade(5);
  student.addGrade(3);
  console.log("Average grade:", student.average());   // 4
  console.log("Has passed?", student.hasPassed());    // true

  console.log("\n3. Library");
  const library = new Library();
  library.addBook({ title: "Book A", author: "Author 1" });
  library.addBook({ title: "Book B", author: "Author 2" });
  library.addBook({ title: "Book C", author: "Author 1" });
  console.log("Books by Author 1:", library.findBooksByAuthor("Author 1"));

  console.log("\n4. BankAccount");
  const account = new BankAccount("Anna");
  account.deposit(100);
  account.withdraw(30);
  console.log("Balance:", account.getBalance());  // 70

  console.log("\n5. TodoList");
  const todo = new TodoList();
  todo.addTask("Learn JS");
  todo.addTask("Write code");
  todo.completeTask(0);
  console.log("Pending tasks:", todo.getPendingTasks());

  console.log("\n6. TemperatureConverter");
  console.log("0°C to F:", TemperatureConverter.celsiusToFahrenheit(0));     // 32
  console.log("32°F to C:", TemperatureConverter.fahrenheitToCelsius(32));   // 0

  console.log("\n7. ShoppingCart");
  const cart = new ShoppingCart();
  const apple = new Product("Apple", 2);
  const bread = new Product("Bread", 5);
  cart.addItem(apple, 3);
  cart.addItem(bread, 2);
  cart.addItem(apple, 1);  // dodanie kolejnego jabłka
  console.log("Items:", cart.listItems());
  console.log("Total price:", cart.totalPrice());

  console.log("\n8. Point");
  const p1 = new Point(0, 0);
  const p2 = new Point(3, 4);
  console.log("Distance:", p1.distanceTo(p2));  // 5
  p1.move(1, 1);
  console.log("Moved p1:", p1);

  console.log("\n9. Quiz");
  const quiz = new Quiz();
  quiz.addQuestion("2+2?", "4");
  quiz.addQuestion("Capital of France?", "Paris");
  console.log("Answer Q1:", quiz.checkAnswer(0, "4"));        // true
  console.log("Answer Q2:", quiz.checkAnswer(1, "London"));   // false

  console.log("\n10. Counter");
  const counter = new Counter();
  counter.increment();
  counter.increment();
  counter.decrement();
  console.log("Counter value:", counter.getValue());  // 1
  counter.reset();
  console.log("Counter after reset:", counter.getValue()); // 0
}

main();

