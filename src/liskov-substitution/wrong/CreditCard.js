import NubankCard from "./NubankCard.js";

export default class CreditCard extends NubankCard {
  creditValidate() {
    console.log("credit validation...");
  }
}
