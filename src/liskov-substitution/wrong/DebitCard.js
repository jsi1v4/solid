import NubankCard from "./NubankCard.js";

export default class DebitCard extends NubankCard {
  debitValidate() {
    console.log("debit validation...");
  }
}
