export class Book {
  constructor(title, author, publishedDate) {
    this.title = title;
    this.author = author;
    this.publishedDate = publishedDate;
  }
}

export const BookCollection = [
  new Book("Philosopher's Stone", "J. K. Rowling", 1997),
  new Book("Chamber of Secrets", "J. K. Rowling", 1998),
  new Book("Prisoner of Azkabans", "J. K. Rowling", 1999),
  new Book("Goblet of Fire", "J. K. Rowling", 2000),
  new Book("Order of the Phoenix", "J. K. Rowling", 2003),
  new Book("Half-Blood Prince", "J. K. Rowling", 2005),
  new Book("Deathly Hallows", "J. K. Rowling", 2007),

  new Book("The House of the Spirits", "Isabel Allende", 1982),
  new Book("Eva Luna: A Novel", "Isabel Allende", 1987),
  new Book("Island Beneath the Sea", "Isabel Allende", 2010),
  new Book("In the Midst of Winter", "Isabel Allende", 2017),
  new Book("A Long Petal of the Sea", "Isabel Allende", 2019)
];

 