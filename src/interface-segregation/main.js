//! Wrong
// import MultiFunctionPrinter from "./wrong/MultiFunctionPrinter.js";
// import OldFashionedPrinter from "./wrong/OldFashionedPrinter.js";

//* Correct
import MultiFunctionPrinter from "./correct/MultiFunctionPrinter.js";
import OldFashionedPrinter from "./correct/OldFashionedPrinter.js";

function main() {
  console.log("Interface Segregation Principle");

  let printer = new MultiFunctionPrinter();
  // let printer = new OldFashionedPrinter();
  printer.scan();
}

main();
