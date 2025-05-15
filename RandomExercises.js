





// 1. Employee & Company
class Employee {
  constructor(name, surname, salary) {
    this.name = name;
    this.surname = surname;
    this.salary = salary;
  }
}

class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(emp) {
    this.employees.push(emp);
  }

  averageSalary() {
    const total = this.employees.reduce((sum, e) => sum + e.salary, 0);
    return total / this.employees.length;
  }

  highestSalary() {
    return this.employees.reduce((prev, curr) => (curr.salary > prev.salary ? curr : prev));
  }
}

// 2. Movie & MovieCollection
class Movie {
  constructor(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
  }
}

class MovieCollection {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

  findByDirector(director) {
    return this.movies.filter(m => m.director === director);
  }

  findByYear(year) {
    return this.movies.filter(m => m.year === year);
  }

  listTitles() {
    return this.movies.map(m => m.title);
  }
}

// 3. ATM
class ATM {
  constructor() {
    this.cash = 1000;
  }

  withdraw(amount) {
    if (amount % 10 !== 0) return "Invalid amount";
    if (amount > this.cash) return "Insufficient funds";
    this.cash -= amount;
    return `Withdrawn: ${amount}`;
  }

  deposit(amount) {
    if (amount % 10 !== 0) return "Invalid deposit";
    this.cash += amount;
    return `Deposited: ${amount}`;
  }
}

// 4. NumberStats
class NumberStats {
  constructor(numbers) {
    this.numbers = numbers;
  }

  min() {
    return Math.min(...this.numbers);
  }

  max() {
    return Math.max(...this.numbers);
  }

  sum() {
    return this.numbers.reduce((a, b) => a + b, 0);
  }

  average() {
    return this.sum() / this.numbers.length;
  }

  standardDeviation() {
    const avg = this.average();
    const squareDiffs = this.numbers.map(n => (n - avg) ** 2);
    const avgSquareDiff = squareDiffs.reduce((a, b) => a + b, 0) / this.numbers.length;
    return Math.sqrt(avgSquareDiff);
  }
}

// 5. CharCounter
function countChars(str) {
  const result = {};
  for (let char of str.replace(/\s/g, '').toUpperCase()) {
    result[char] = (result[char] || 0) + 1;
  }
  return result;
}

// 6. createClock (closure)
function createClock() {
  let seconds = 0;
  return {
    tick: () => seconds++,
    getTime: () => seconds,
    reset: () => (seconds = 0)
  };
}

// 7. createLimitedCounter
function createLimitedCounter(max) {
  let count = 0;
  return () => {
    if (count < max) return ++count;
    return "Limit reached";
  };
}

// 8. TextAnalyzer
class TextAnalyzer {
  constructor(text) {
    this.words = text.toLowerCase().match(/\w+/g) || [];
  }

  wordCount() {
    return this.words.length;
  }

  charCount() {
    return this.words.join('').length;
  }

  uniqueWords() {
    return [...new Set(this.words)];
  }

  mostFrequentWord() {
    const counts = {};
    this.words.forEach(w => (counts[w] = (counts[w] || 0) + 1));
    return Object.entries(counts).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
  }
}

// 9. reverseWordsMirror
function reverseWordsMirror(sentence) {
  return sentence
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

// 10. Quiz System
class QuizSystem {
  constructor() {
    this.questions = [];
    this.answers = [];
  }

  addQuestion(q, a) {
    this.questions.push({ q, a });
  }

  answer(index, userAnswer) {
    this.answers[index] = userAnswer;
  }

  score() {
    let correct = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.answers[i] === this.questions[i].a) correct++;
    }
    return `${correct}/${this.questions.length}`;
  }
}

// 11. Food ordering system
class FoodItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  constructor() {
    this.items = [];
  }

  addItem(food, qty = 1) {
    this.items.push({ food, qty });
  }

  total() {
    return this.items.reduce((sum, i) => sum + i.food.price * i.qty, 0);
  }
}

// 12. Task Management
class Task {
  constructor(title, status = 'todo') {
    this.title = title;
    this.status = status;
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  assignTask(task) {
    this.tasks.push(task);
  }

  listByStatus(status) {
    return this.tasks.filter(t => t.status === status);
  }
}

// ==== MAIN TEST SECTION ====
function main() {
  // 1
  const emp1 = new Employee("Jan", "Kowalski", 4000);
  const emp2 = new Employee("Anna", "Nowak", 6000);
  const comp = new Company();
  comp.addEmployee(emp1);
  comp.addEmployee(emp2);
  console.log("Avg Salary:", comp.averageSalary());
  console.log("Highest Paid:", comp.highestSalary().name);

  // 2
  const mc = new MovieCollection();
  mc.addMovie(new Movie("Inception", "Nolan", 2010));
  mc.addMovie(new Movie("Interstellar", "Nolan", 2014));
  console.log("Nolan movies:", mc.findByDirector("Nolan"));

  // 3
  const atm = new ATM();
  console.log(atm.withdraw(90));
  console.log(atm.deposit(100));

  // 4
  const stats = new NumberStats([1, 2, 3, 4, 5]);
  console.log("Stats avg:", stats.average());

  // 5
  console.log(countChars("Ala ma kota"));

  // 6
  const clock = createClock();
  clock.tick(); clock.tick();
  console.log("Clock time:", clock.getTime());

  // 7
  const counter = createLimitedCounter(2);
  console.log(counter());
  console.log(counter());
  console.log(counter());

  // 8
  const analyzer = new TextAnalyzer("Ala ma kota kot ma Ale");
  console.log("Most frequent:", analyzer.mostFrequentWord());

  // 9
  console.log(reverseWordsMirror("Ala ma kota"));

  // 10
  const quiz = new QuizSystem();
  quiz.addQuestion("2+2?", "4");
  quiz.answer(0, "4");
  console.log("Quiz score:", quiz.score());

  // 11
  const burger = new FoodItem("Burger", 10);
  const fries = new FoodItem("Fries", 5);
  const order = new Order();
  order.addItem(burger, 2);
  order.addItem(fries);
  console.log("Order total:", order.total());

  // 12
  const user = new User("Ewa");
  const task1 = new Task("Zrob laby");
  const task2 = new Task("Kolokwium", "done");
  user.assignTask(task1);
  user.assignTask(task2);
  console.log("TODOs:", user.listByStatus("todo"));
}

main();
