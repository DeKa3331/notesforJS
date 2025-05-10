// Zadanie 1
// Operacje porównania wartości i typów
let a = 10;
console.log(a == 10);        // true - porównanie wartości
console.log(a == "10");     // true - porównanie wartości, string konwertowany do liczby
console.log(a != 20);        // true - 10 nie jest równe 20
console.log(a != 10);        // false - są równe
console.log(a != "10");     // false - wartości się zgadzają
console.log(a === 10);       // true - wartość i typ się zgadza
console.log(a === "10");    // false - typy różne
console.log(a !== 10);       // false - są identyczne
console.log(a !== "10");    // true - typy się różnią

// Zadanie 2
// let/const mają zasięg blokowy, var funkcyjny
// const nie pozwala na ponowne przypisanie
// JavaScript używa dynamicznego i słabego typowania

// Zadanie 3
// Funkcja wypisująca kolejne liczby od 1 do nr
function printNumbers(nr) {
  let result = "";
  for (let i = 1; i <= nr; i++) {
    result += i + " ";
  }
  return result.trim();
}
console.log(printNumbers(5)); // "1 2 3 4 5"

// Zadanie 4
// Funkcja losująca liczby i sprawdzająca ile jest większych niż 10
function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(generateRandom(1, 20));
}
let above10 = numbers.filter(n => n > 10).length;
console.log(numbers); // Wyświetla wylosowane liczby
console.log(numbers.filter(n => n > 10)); //filtruje liczby z tablicy numbers ktore sa wieksze n>10
/*
ewentualnie mozna zapisac tak bez strzalki
let above10 = numbers.filter(function(n) {
  return n > 10;
});

*/

console.log(above10);
console.log(above10 >= 5 ? "udało się" : "niestety nie"); //sprawdzenie czy wiekszosc jest

// Zadanie 5
// Sprawdzanie czy tekst jest palindromem

function checkPalindrom(txt)
{
  let reversedTxt = txt.split(""); //dzieli wyraz na literki
  //let reversedTxt = txt.split("").reverse(); //odwraca kolejnosc
  //let reversedTxt = txt.split("").reverse().join(""); //laczy w calosc jako jeden string
  console.log(reversedTxt);
    return txt===reversedTxt;
}
console.log(checkPalindrom("alam"));


// Zadanie 6
// Generowanie i analiza tablicy z losowymi liczbami
function random(max) {
  return Math.floor(Math.random() * (max + 1));
}
let arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(random(100));
}
arr.sort((a, b) => a - b); // sortowanie rosnąco
let sum = arr.reduce((a, b) => a + b, 0); //reduce to fajna opcja kotra z tablicy robi jedna wartosc
/*
odpowiednik:
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
*/
let avg = sum / arr.length;
console.log(arr);
console.log("Suma:", sum);
console.log("Średnia:", avg);

// Zadanie 7
// Usuwanie duplikatów z posortowanej tablicy
function removeDuplicates(nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[k] !== nums[i]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return k + 1;
}
let nums = [1, 1, 2];
let k = removeDuplicates(nums);
console.log(k, nums.slice(0, k)); // 2 [1, 2]

// Zadanie 8
// Szukanie najdłuższego wspólnego prefiksu
function longestCommonPrefix(strs) {
  if (!strs.length) return "";
  let prefix = strs[0];
  for (let str of strs) {
    while (str.indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }
  return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""

// Zadanie 9
// Konwersja liczb rzymskich na arabskie
function romanToInt(s) {
  const map = {
    I: 1, V: 5, X: 10, L: 50,
    C: 100, D: 500, M: 1000
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < map[s[i + 1]]) {
      result -= map[s[i]];
    } else {
      result += map[s[i]];
    }
  }
  return result;
}
console.log(romanToInt("III"));     // 3
console.log(romanToInt("LVIII"));   // 58
console.log(romanToInt("MCMXCIV")); // 1994

// Zadanie 10
// Dekodowanie ukrytego ciągu znaków na podstawie ruchów
const arr2 = [
  [66, 97, 114, 100, 4, 2, 110, 11, 1, 6, 20],
  [99, 3, 10, 122, 76, 101, 111, 3, 32, 100, 0],
  [6, 22, 1, 111, 32, 10, 110, 7, 97, 97, 67],
  [60, 97, 116, 32, 100, 23, 97, 114, 100, 32, 34],
  [2, 106, 15, 6, 111, 56, 80, 20, 10, 86, 10],
  [20, 110, 121, 32, 107, 55, 50, 99, 110, 105, 8],
  [12, 9, 22, 102, 66, 100, 12, 105, 50, 76, 110],
  [42, 81, 123, 92, 26, 98, 20, 1, 20, 11, 10]
];
const str = "rrrdddllddrrruuuurrddrruurddddlld";
let x = 0, y = 0, output = "";
for (let move of str) {
  if (move === 'r') x++;
  else if (move === 'l') x--;
  else if (move === 'd') y++;
  else if (move === 'u') y--;
  output += String.fromCharCode(arr2[y][x]);
}
console.log(output); // Odszyfrowany tekst

// Zadanie 11
// Długość ostatniego słowa w zdaniu
function lengthOfLastWord(s) {
  return s.trim().split(" ").pop().length;
}
console.log(lengthOfLastWord("Hello World"));             // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4

// Zadanie 12
// Liczenie możliwych sposobów wejścia na szczyt schodów
function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
