// import Product from "./wrong/Product.js";
// import ProductFilter from "./wrong/ProductFilter.js";
// import Color from "./wrong/Color.js";
// import Size from "./wrong/Size.js";

import AndSpecification from "./correct/AndSpecification.js";
import BetterFilter from "./correct/BetterFilter.js";
import Color from "./correct/Color.js";
import ColorSpecification from "./correct/ColorSpecification.js";
import Product from "./correct/Product.js";
import Size from "./correct/Size.js";
import SizeSpecification from "./correct/SizeSpecification.js";

function main() {
  console.log("Open-Closed Principle");

  // ! Wrong
  // let apple = new Product("Apple", Color.green, Size.small);
  // let tree = new Product("Tree", Color.green, Size.large);
  // let house = new Product("House", Color.blue, Size.large);

  // let products = [apple, tree, house];

  // let pf = new ProductFilter();

  // console.log(`Green products (old):`);
  // for (let p of pf.filterByColor(products, Color.green)) {
  //   console.log(` * ${p.name} is green`);
  // }

  // ! Correct
  let apple = new Product("Apple", Color.green, Size.small);
  let tree = new Product("Tree", Color.green, Size.large);
  let house = new Product("House", Color.blue, Size.large);

  let products = [apple, tree, house];

  let bf = new BetterFilter();

  console.log(`Green products (new):`);
  for (let p of bf.filter(products, new ColorSpecification(Color.green))) {
    console.log(` * ${p.name} is green`);
  }

  console.log(`Large products:`);
  for (let p of bf.filter(products, new SizeSpecification(Size.large))) {
    console.log(` * ${p.name} is large`);
  }

  console.log(`Large and green products:`);
  let spec = new AndSpecification(
    new ColorSpecification(Color.green),
    new SizeSpecification(Size.large)
  );
  for (let p of bf.filter(products, spec)) {
    console.log(` * ${p.name} is large and green`);
  }
}

main();
