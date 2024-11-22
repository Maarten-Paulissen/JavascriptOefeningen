const gameArtikelen = [
  { naam: "PlayStation 5", prijs: 499.99 },
  { naam: "Xbox Series X", prijs: 499.99 },
  { naam: "Nintendo Switch", prijs: 299.99 },
  { naam: "DualSense Controller (PS5)", prijs: 69.99 },
  { naam: "Xbox Wireless Controller", prijs: 59.99 },
  { naam: "Gaming Headset", prijs: 89.99 },
  { naam: "Gaming Mouse", prijs: 49.99 },
  { naam: "Gaming Keyboard", prijs: 129.99 },
];

const btwPercentage = 0.21; //Het effectieve btw percentage

const productenMetBtw = gameArtikelen.map((product) => {
  const prijsMetBtw = product.prijs * (1 + btwPercentage); // Hier berekenen we de prijs inclusief BTW
  return { naam: product.naam, prijsMetBtw: prijsMetBtw.toFixed(2) }; // Maak een nieuw object met de prijs inclusief BTW
});

console.log(productenMetBtw);
