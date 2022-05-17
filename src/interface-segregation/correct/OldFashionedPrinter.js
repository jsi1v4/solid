import Printer from "./Printer.js";

export default class OldFashionedPrinter extends Printer {
  print(doc) {
    console.log("scan");
  }
}
