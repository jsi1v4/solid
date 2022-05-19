import NubankCard from "./NubankCard.js";

export default class DebitCard extends NubankCard {
  validate() {
    console.log("debit validation...");
  }
}
