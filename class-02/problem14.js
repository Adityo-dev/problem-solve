let a = Number("3");
let b = Number("4");
let c = Number("5");

if (a + b > c && b + c > a && a + c > b) {
  console.log(`${a}, ${b}, ${c} can form a triangle`);
} else {
  console.log(`${a}, ${b}, ${c} cannot form a triangle`);
}
