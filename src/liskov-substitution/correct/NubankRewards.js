import PaymentInstrument from "./PaymentInstrument.js";

export default class NubankRewards extends PaymentInstrument {
  validate() {
    console.log("checking rewards...");
  }

  collectPayment() {
    console.log("collect payment.");
  }
}
