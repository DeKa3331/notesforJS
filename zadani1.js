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
  return k + 1; // k + 1 to liczba unikalnych elementów
}
let nums = [1, 1, 2,5,5,,6,7];
let k = removeDuplicates(nums);
// nums zmienia się w miejscu, ale slice(0, k) pozwala wyciągnąć unikalne elementy
console.log(k, nums.slice(0, k)); // 2 [1, 2]


// Zadanie 7
// moja wersja

function removeDuplicatesAndSort(nums) {
  let uniqueNums = [];
  
  for (let i = 0; i < nums.length; i++) {
    // Dodajemy element tylko, jeśli nie ma go już w tablicy
    if (!uniqueNums.includes(nums[i])) {
      uniqueNums.push(nums[i]);
    }
    // Sortowanie po każdym dodaniu elementu
    uniqueNums.sort((a, b) => a - b);
  }
  
  return uniqueNums;
}

let nums = [1, 1, 2, 5, 5, 6, 7];
let sortedUnique = removeDuplicatesAndSort(nums);
console.log(sortedUnique);  // [1, 2, 5, 6, 7]



// Zadanie 8
// wersja gpt
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




//zadanie 8 werjsa moja
function NWP(strs) {
    if (strs.length === 0) return "";

    let prefiks = "";

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return prefiks;
            }
        }

        prefiks += char;
    }

    return prefiks;
}


// Zadanie 9
// gpt
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



//zadanie 9 moje wsm to samo ale bardziej przejrzyste
function romanToInt(liczba) {
    let romanLetters = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < liczba.length; i++) {
         let value = romanLetters[liczba[i]]; //wartość dla aktualnego znaku
         let Nvalue = romanLetters[liczba[i + 1]]; //kolejny znak
        if (Nvalue > value) { //Jeśli wartość następnego znaku jest większa niż bieżącego, to odejmujemy wartość bieżącego znaku
            total -= value;
        } else {
            total += value;
        }
    }
    return total;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
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




//zad10 moje

 let arr = [
    [ 66,  97, 114, 100,   4,   2, 110,  11,   1,   6,  20, ],
    [ 99,   3,  10, 122,  76, 101, 111,   3,  32, 100,   0, ],
    [  6,  22,   1, 111,  32,  10, 110,   7,  97,  97,  67, ],
    [ 60,  97, 116,  32, 100,  23,  97, 114, 100,  32,  34, ],
    [  2, 106,  15,   6, 111,  56,  80,  20,  10,  86,  10, ],
    [ 20, 110, 121,  32, 107,  55,  50,  99, 110, 105,   8, ],
    [ 12,   9,  22, 102,  66, 100,  12, 105,  50,  76, 110, ],
    [ 42,  81, 123,  92,  26,  98,  20,   1,  20,  11,  10, ],
];

 let str = "rrrdddllddrrruuuurrddrruurddddlld";

let x = 0, y = 0;
let result = String.fromCharCode(arr[y][x]);

for (let i = 0; i < str.length; i++) {
     let move = str[i];
    if (move === 'r') x++;
    if (move === 'l') x--;
    if (move === 'd') y++;
    if (move === 'u') y--;

    result += String.fromCharCode(arr[y][x]);
}
console.log(result);
console.log(String.fromCharCode(65));      // "A"
console.log(String.fromCharCode(97));      // "a"
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"




// Zadanie 11
// Długość ostatniego słowa w zdaniu
function lengthOfLastWord(s) {
  return s.trim().split(" ").pop().length; //madre uzycie pop bo zwraca ostanti element z tablicy
}

let zdanie = "Kocham programowanie w JavaScript";

let slowa = zdanie.split(" "); // ["Kocham", "programowanie", "w", "JavaScript"]
let ostatnieSlowov2 = slowa[slowa.length - 1];
let ostatnieSlowo = slowa.pop(); // "JavaScript"

console.log(ostatnieSlowo); // JavaScript
console.log(slowa); // ["Kocham", "programowanie", "w"]
console.log(ostatnieSlowov2); // JavaScript

console.log(lengthOfLastWord("Hello World"));             // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4

//11 moje
zad11
function lengthOfLastWord(s) {
    let length = 0;
    let i = s.length - 1;
    while (i >= 0 && s[i] === ' ') {
        i--;
    }
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }
    return length;
}
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));


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




//zad12 moje
function schody(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let a = 1;
    let b = 2;

    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}
console.log(schody(2));
console.log(schody(3));
console.log(schody(5));


//wersja rekurencyjna:
function schody(n) {
    if (n === 1) return 1; // tylko jeden sposób wejścia
    if (n === 2) return 2; // dwa sposoby: (1+1) lub (2)
    return schody(n - 1) + schody(n - 2);
}

console.log(schody(2)); // 2
console.log(schody(3)); // 3
console.log(schody(5)); // 8


