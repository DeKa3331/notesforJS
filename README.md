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

Powodzenia na kolokwium! 🚀
