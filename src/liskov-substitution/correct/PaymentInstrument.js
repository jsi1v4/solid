export default class PaymentInstrument {
  constructor() {
    if (this.constructor.name === "PaymentInstrument")
      throw new Error("PaymentInstrument is abstract!");
  }

  validate() {}
  collectPayment() {}
}
