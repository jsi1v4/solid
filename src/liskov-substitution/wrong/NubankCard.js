export default class NubankCard {
  constructor() {
    if (this.constructor.name === "NubankCard")
      throw new Error("NubankCard is abstract!");
  }

  basicValidate() {
    console.log("basic validation...");
  }

  collectPayment() {
    console.log("collect payment.");
  }
}
