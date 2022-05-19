import NubankCard from "./NubankCard.js";

export default class NubankRewards extends NubankCard {
  rewardsValidate() {
    console.log("checking rewards...");
  }

  collectPayment() {
    console.log("collect payment.");
  }
}
