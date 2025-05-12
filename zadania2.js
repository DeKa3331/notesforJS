//podstawowe tworzenie obiektu:


const currentUser = {
  name: "Jan",
  surname: "Kowalski",
  email: "jan.kowalski@example.com",
  www: "https://jan-kowalski.dev",
  userType: "admin",
  isActive: true,

  show: function() {
    console.log("Name:", this.name);
    console.log("Surname:", this.surname);
    console.log("Email:", this.email);
    console.log("WWW:", this.www);
    console.log("User Type:", this.userType);
    console.log("Is Active:", this.isActive);
  },

  setActive: function(active) {
    this.isActive = active;
  }
};

// Przykład użycia:
currentUser.show();       // Wyświetli wszystkie właściwości
currentUser.setActive(false); 
currentUser.show();       // Zaktualizowany status isActive




//zad2
//podstawowa klasa book


class Book {
  constructor() {
    this.users = [];
  }

  addUser(name, age, phone) {
    this.users.push({
      name: name,
      age: age,
      phone: phone,
    });
  }

  showUsers() {
    for (let user of this.users) {
      console.log(user);
    }
  }

  findByName(name) {
    let x = this.users.find(user => user.name === name);
    console.log(x || false);
  }

  getCount() {
    return this.users.length;
  }
}

// Przykład użycia:
let book = new Book();
book.addUser("Jan", 30, "123-456-789");
book.addUser("Krystian", 25, "256-456-789");
book.showUsers();
book.findByName("Jan");
console.log("Liczba użytkowników:", book.getCount());


//zad3


const text = {
  check: function(txt, word) {
    return txt.includes(word);
  },

  getCount: function(txt) {
    return txt.length;
  },

  getWordsCount: function(txt) {
    return txt.trim().split(/\s+/).length;
  },

  setCapitalize: function(txt) {
    return txt
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  },

  setMix: function(txt) {
    let result = '';
    for (let i = 0; i < txt.length; i++) {
      if (i % 2 === 0) {
        result += txt[i].toLowerCase();
      } else {
        result += txt[i].toUpperCase();
      }
    }
    return result;
  },

  generateRandom: function(lng) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < lng; i++) {
      let index = Math.floor(Math.random() * letters.length);
      result += letters[index];
    }
    return result;
  }
};

// Przykłady użycia:
console.log(text.check("ala ma kota", "kota"));           // true
console.log(text.getCount("ala ma kota"));                // 11
console.log(text.getWordsCount("Ala ma kota"));           // 3
console.log(text.setCapitalize("ala ma kota"));           // "Ala Ma Kota"
console.log(text.setMix("ala ma kota"));                  // "aLa mA KoTa"
console.log(text.generateRandom(10));                     // np. "xhfubweqpa"




//zad4
