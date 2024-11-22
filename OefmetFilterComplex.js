const items = [
  { name: "Laptop", price: 900, inStock: true },
  { name: "Smartphone", price: 80, inStock: true },
];

const filterItems = items.filter((item) => item.inStock && item.price < 100);

console.log(filterItems);
