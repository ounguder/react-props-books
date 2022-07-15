class book {
  constructor(title, author, url, id) {
    this.title = title;
    this.author = author;
    this.url = url;
    this.id = id;
  }
}

export const books = [
  new book(
    "Ince Memed",
    "Yasar Kemal",
    "https://i.idefix.com/cache/500x400-0/originals/0000000147922-1.jpg",
    1
  ),
  new book(
    "Yaban",
    "Yakup Kadri Karaosmanoglu",
    "https://i.idefix.com/cache/500x400-0/originals/0000000061419-1.jpg",
    2
  ),
  new book(
    "Kuyucakli Yusuf",
    "Sabahattin Ali",
    "https://i.idefix.com/cache/500x400-0/originals/0001815326001-1.jpg",
    3
  ),
  new book(
    "Kaplumbagalar",
    "Fakir Baykurt",
    "https://i.idefix.com/cache/500x400-0/originals/0000000219081-1.jpg",
    4
  ),
  new book(
    "Suyu Arayan Adam",
    "Sevket Sureyya Aydemir",
    "https://i.idefix.com/cache/500x400-0/originals/0000000054611-1.jpg",
    5
  ),
  new book(
    "Aylak Adam",
    "Yusuf Atilgan",
    "https://i.idefix.com/cache/500x400-0/originals/0001850045001-1.jpg",
    6
  ),
];
