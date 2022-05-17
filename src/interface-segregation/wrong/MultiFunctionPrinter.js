import Machine from "./Machine.js";

export default class MultiFunctionPrinter extends Machine {
  print(doc) {
    console.log("print");
  }

  fax(doc) {
    console.log("fax");
  }

  scan(doc) {
    console.log("scan");
  }
}
