// Exercise 1: Create a Simple Book Object
// Objective:
// Create a JavaScript object to represent a book in a library catalog. The book should have
// properties for title, author, ISBN, and isCheckedOut, and it should have a method to
// toggle the isCheckedOut status.
// Instructions:
// 1. Define an object named book.
// 2. Add properties for title, author, ISBN, and isCheckedOut.
// 3. Add a method named toggleCheckOutStatus that toggles the isCheckedOut
// property.

const book = {
  title: "",
  author: "",
  ISBN: undefined,
  isCheckedOut: true,
  toggleCheckOutStatus: function () {
    this.isCheckedOut = !this.isCheckedOut;
  },
};

// Exercise 2: Create a Shopping Cart
// Object
// Objective:
// Create a shopping cart object that holds items. Each item should be an object itself. The cart
// should have methods for adding items, removing items, and calculating the total price.
// Instructions:
// 1. Define a shoppingCart object.
// 2. Add a property items that will hold an array of objects. Each object represents an item
// with properties name, price, and quantity.
// 3. Add a method addItem(name, price, quantity) that adds an item to the cart. If
// the item already exists, increase the quantity.
// 4. Add a method removeItem(name) that removes an item from the cart.
// 5. Add a method calculateTotal() that returns the total cost of the ite
//{ name: "", price: "", quantity: "" },
//{ name: "", price: "", quantity: "" },
const shoppingCart = {
  items: [{ name: "amal", price: 1, quantity: 0 }],
  addItem: function (name, price, quantity) {
    const index = this.items.findIndex((item) => item.name === name);
    if (index != -1) {
      this.items[index].quantity = +1;
    } else {
      this.items.push({ name, price, quantity });
    }
  },
  removeItem: function (name) {
    const index = this.items.findIndex((item) => item.name === name);
    if (index != -1) {
      this.items.splice(index, 1);
    }
  },
  calculateTotal: function () {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  },
};
// shoppingCart.addItem("amal", 20, 1);
// console.log(shoppingCart.items);
// shoppingCart.addItem("lolo", 20, 1);
// console.log(shoppingCart.items);
// //shoppingCart.removeItem("lolo");
// //console.log(shoppingCart.items);
// console.log("total");
// console.log(shoppingCart.calculateTotal());
// Front-end
// development:Objects
// JavaScript – Book Utilities
// The following exercise contains the following subjects:
// ● Objects
// Instructions
// 1. create 2 book objects with properties: name, author, year.
const book1 = { name: "abc", author: "", year: 1900 };
const book2 = { name: "abc", author: "", year: 1800 };
// 2. create an empty object bookUtils (utils = short for utilities).
//3. add to the bookUtils object a function getFirstPublished,
// that receives 2 books and returns the book with the
// smaller year.
// 4. add to the bookUtils object a function setNewEdition, that
// receives a book and an edition year and sets a new
// property latestEdition with the edition year, or updates an
// existing one.
const bookUtils = {
  getFirstPublished: function (book1, book2) {
    let theBookThesmallerYear = {};
    if (book1.year > book2.year) {
      theBookThesmallerYear = book2;
    } else {
      theBookThesmallerYear = book1;
    }
    return theBookThesmallerYear;
  },
  setNewEdition: function (book, editionYear) {
    book.editionYear = editionYear;
  },
  setLanguage: function (book, language) {
    // Object.defineProperties(book, language);

    book.language = language;
  },
  setTranslation: function (book, language, translator) {
    book.translator = { translator: translator, language: language };
  },
  setPublisher: function (book, name, location) {
    book.puplisher = { name: name, location: location };
  },
  isSamePublisher: function (book1, book2) {
    let isTheSame;
    if (book1.puplisher.name === book2.puplisher.name) {
      isTheSame = true;
    } else {
      isTheSame = false;
    }
    return isTheSame;
  },
};

console.log(bookUtils.getFirstPublished(book1, book2));
bookUtils.setNewEdition(book1, 2023);

console.log(book1);
bookUtils.setLanguage(book1, "arabic");
console.log(book1);
bookUtils.setPublisher(book1, "amal", "jordan");
bookUtils.setPublisher(book2, "ahmed", "jordan");

console.log(book1);
console.log(book2);
console.log(bookUtils.isSamePublisher(book1, book2));
