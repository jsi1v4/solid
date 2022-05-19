import PaymentInstrument from "./PaymentInstrument.js";

export default class NubankCard extends PaymentInstrument {
  constructor() {
    super();
    if (this.constructor.name === "NubankCard") {
      throw new Error("NubankCard is abstract!");
    }
  }

  validate() {
    console.log("basic validation...");
  }

  collectPayment() {
    console.log("collect payment.");
  }
}
