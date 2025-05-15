# Notatki do kolokwium z JavaScript

## 📘 Podstawy JavaScript

* **Typy danych**: `string`, `number`, `boolean`, `object`, `array`, `null`, `undefined`, `symbol`, `bigint`
* **Deklaracja zmiennych**: `let`, `const`, `var`
* **Operatory**:

  * Arytmetyczne: `+`, `-`, `*`, `/`, `%`
  * Porównania: `===`, `!==`, `>`, `<`, `>=`, `<=`
  * Logiczne: `&&`, `||`, `!`
  * Nullish coalescing: `??`
  * Optional chaining: `?.`

## 🔁 Struktury sterujące

```js
if (condition) {
  // kod
} else if (...) {
  // kod
} else {
  // kod
}

switch (value) {
  case 1:
    // kod
    break;
  default:
    // kod
}

for (let i = 0; i < arr.length; i++) {
  // kod
}

while (condition) {
  // kod
}

do {
  // kod
} while (condition);
```

## 📦 Funkcje

```js
function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;
```

* Scope, Hoisting, Closures
* Funkcje jako parametry i zwracane wartości

## 🧱 Obiekty i tablice

```js
const obj = { name: "Jan", age: 20 };
console.log(obj.name);

const arr = [1, 2, 3];
arr.map(x => x * 2);
arr.filter(x => x > 1);
arr.reduce((a, b) => a + b, 0);
```

## 📜 DOM i zdarzenia

```js
document.getElementById('myId');
document.querySelector('.myClass');

document.querySelector('button').addEventListener('click', (e) => {
  console.log('Klik!');
});
```

## 🌐 Fetch API (asynchroniczność)

```js
fetch('https://api.example.com')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

async function getData() {
  try {
    const res = await fetch('https://api.example.com');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

## 🧪 Przykładowe zadania

* Odwrócenie tekstu:

```js
const reverse = str => str.split('').reverse().join('');
```

* Sumowanie liczb w tablicy:

```js
const sum = arr => arr.reduce((a, b) => a + b, 0);
```

* Filtrowanie obiektów:

```js
const users = [
  { name: 'Jan', age: 22 },
  { name: 'Anna', age: 19 }
];

const adults = users.filter(user => user.age >= 20);
```

## ✅ Przydatne snippet'y

```js
// Czy liczba jest parzysta:
const isEven = n => n % 2 === 0;

// Unikalne wartości:
const unique = arr => [...new Set(arr)];

// Losowy element z tablicy:
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];
```

---

# 📚 Przydatne funkcje JavaScript – Kolokwium

## 🔹 Tablice (Array methods)

### 1. `.map()`
Tworzy nową tablicę z przekształconych elementów:
```js
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
[1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4]
[1, 2, 3, 4].reduce((sum, x) => sum + x, 0); // 10
[1, 2, 3].forEach(x => console.log(x));
[1, 2, 3].find(x => x > 1); // 2
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(5); // false
[2, 4, 6].every(x => x % 2 === 0); // true
[1, 3, 5, 6].some(x => x % 2 === 0); // true
[5, 2, 9].sort(); // [2, 5, 9] - OK
["c", "a", "b"].sort(); // ["a", "b", "c"]

// Liczby trzeba sortować z funkcją:
[10, 2, 5].sort((a, b) => a - b); // [2, 5, 10]
[1, 2, 3].reverse(); // [3, 2, 1]
const add = (a, b) => a + b;
function counter() {
  let count = 0;
  return () => ++count;
}
const c = counter();
c(); // 1
c(); // 2
const person = { name: "Ala", age: 25 };
const { name, age } = person;
class Animal {
  constructor(name) { this.name = name; }
}
class Dog extends Animal {
  bark() { return "Woof!"; }
}
const obj = { a: 1, b: 2 };
Object.keys(obj);   // ["a", "b"]
Object.values(obj); // [1, 2]
Object.entries(obj); // [["a", 1], ["b", 2]]
Math.max(1, 5, 10); // 10
Math.floor(4.7);    // 4
Math.random();      // np. 0.38291
const arr = [1, 2];
const newArr = [...arr, 3]; // [1, 2, 3]

const obj = { a: 1 };
const copy = { ...obj, b: 2 }; // { a: 1, b: 2 }
const result = age >= 18 ? "Dorosły" : "Niepełnoletni";
setTimeout(() => console.log("Hello"), 1000); // po 1s

const timer = setInterval(() => console.log("Tick"), 1000);
// clearInterval(timer); // zatrzymanie

