import Machine from "./Machine.js";

export default class OldFashionedPrinter extends Machine {
  print(doc) {
    console.log("print");
  }

  fax(doc) {
    throw new Error("not implemented!");
  }

  scan(doc) {
    throw new Error("not implemented!");
  }
}
