import Printer from "./Printer.js";
import Scanner from "./Scanner.js";

function Aggregation(...bases) {
  class Bases {
    constructor() {}
  }
  bases.forEach((base) => {
    Object.getOwnPropertyNames(base.prototype)
      .filter((prop) => prop != "constructor")
      .forEach((prop) => (Bases.prototype[prop] = base.prototype[prop]));
  });
  return Bases;
}

export default class MultiFunctionPrinter extends Aggregation(
  Printer,
  Scanner
) {
  print(doc) {
    console.log("print");
  }

  scan(doc) {
    console.log("scan");
  }
}
