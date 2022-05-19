import NubankCard from "./NubankCard.js";

export default class CreditCard extends NubankCard {
  validate() {
    console.log("credit validation...");
  }
}
