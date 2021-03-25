const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
console.log("Question 1");
for (let i = 0; i < books.length; i++) {
  console.log(books[i].authorFirst + " " + books[i].authorLast + " wrote " + books[i].name + " in " + books[i].publishDate);
}
//Sort books from oldest to most recent\
console.log("Question 2");
var bookDate = [];
for (let i = 0; i < books.length; i++) {
  bookDate[i] = books[i].publishDate;
}
bookDate.sort(function(a, b){return a-b});
console.log(bookDate);
//sort books alphabetically
console.log("Question 3");
var bookName = [];
for (let i = 0; i < books.length; i++) {
  bookName[i] = books[i].name;
}
bookName.sort();
console.log(bookName);
//Find who wrote War and Peace
console.log("Question 4");
for (let i = 0; i < books.length; i++) {
  if(books[i].name === "War and Peace")
  {
    console.log(books[i].authorFirst + " " + books[i].authorLast);
  }
}
//how many books were written before 1900?
console.log("Question 5");
var amt = 0;
for (let i = 0; i < books.length; i++) {
  if(books[i].publishDate < 1900){
    amt++;
  }
}
console.log(amt);
//was there at least one book published within the last 100 years?
const currentYear = 2021;
console.log("Question 6");
for (let i = 0; i < books.length; i++) {
  if(books[i].publishDate <= currentYear - 100){
    console.log("yes");
    break;
  }
}
//was every book published within the last 100 years?
var everyBook = false;
console.log("Question 7");
for (let i = 0; i < books.length; i++) {
  if(books[i].publishDate <= currentYear - 100){
    everyBook = true;
  }
  else
  {
    everyBook = false;
    break;
  }
}
console.log(everyBook);