const boeken = [
  {
    titel: "Into the Wild",
    auteur: "Erin Hunter",
    publicatiejaar: 2003,
    genre: "Fantasy",
    isbn: "9780064451826",
  },
  {
    titel: "Fire and Ice",
    auteur: "Erin Hunter",
    publicatiejaar: 2003,
    genre: "Fantasy",
    isbn: "9780064451833",
  },
  {
    titel: "Forest of Secrets",
    auteur: "Erin Hunter",
    publicatiejaar: 2004,
    genre: "Fantasy",
    isbn: "9780064451840",
  },
  {
    titel: "Rising Storm",
    auteur: "Erin Hunter",
    publicatiejaar: 2004,
    genre: "Fantasy",
    isbn: "9780064451857",
  },
  {
    titel: "A Dangerous Path",
    auteur: "Erin Hunter",
    publicatiejaar: 2004,
    genre: "Fantasy",
    isbn: "9780064451864",
  },
  {
    titel: "The Darkest Hour",
    auteur: "Erin Hunter",
    publicatiejaar: 2004,
    genre: "Fantasy",
    isbn: "9780064451871",
  },
  {
    titel: "The Sun Trail (dawn of the clans)",
    auteur: "Erin Hunter",
    publicatiejaar: 2013,
    genre: "Fantasy",
    isbn: "9780062069462",
  },
  {
    titel: "The Apprentice's Quest",
    auteur: "Erin Hunter",
    publicatiejaar: 2016,
    genre: "Fantasy",
    isbn: "9780062389871",
  },
];
const titelZoeken = "Into the Wild";
const gevondenBoek = boeken.find((boeken) => boeken.titel === titelZoeken);

console.log(gevondenBoek);
