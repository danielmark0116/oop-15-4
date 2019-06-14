'use strict';

function Smartphone(brand, price, color, waterproof) {
  this.brand = brand;
  this.price = price;
  this.color = color || 'unspecified';
  this.waterproof = waterproof;
}

Smartphone.prototype.printInfo = function() {
  console.log(
    `Phone's brand: ${this.brand}\nCosts: ${this.price}\nColor: ${
      this.color
    }\n${this.waterproof ? 'Phone is waterproof' : 'Phone is not waterproof'}`
  );
};

const store = [];

let iphoneXs = new Smartphone('Apple', 5999, 'Space Grey', true);
let galaxyS10 = new Smartphone('Samsung', 5899, 'Stone Black', true);
let nokia3310 = new Smartphone('Nokia', 100, 'Blue', false);

store.push(iphoneXs);
store.push(galaxyS10);
store.push(nokia3310);

store.forEach(x => {
  x.printInfo();
});
