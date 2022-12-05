function Product(name, price) {
  this.name = name;
  this.price = price;

  Object.defineProperty(this, "name", {
    enumerable: true,
    writable: false,
  });

  Object.defineProperty(this, "price", {
    enumerable: true,
    writable: true,
  });
}

Product.prototype.inStock = true;
Product.prototype.addToCart = function () {
  alert("U heeft de " + this.name + " toegevoegd aan uw winkelwagen!");
};
let cc = new Product("Chromecast", 39.99);
let atv = new Product("Apple TV", 159.99);

atv.inStock = false;

console.log(cc.name + " " + cc.price);
console.log(atv.name + " " + atv.price);

cc.name = "GoogleHome";
cc.price = 186.34;
atv.name = "Samsung TV";
atv.price = 99.99;

console.log(cc.name + " " + cc.price);
console.log(atv.name + " " + atv.price);

console.log(cc.inStock);
console.log(atv.inStock);
atv.addToCart();
