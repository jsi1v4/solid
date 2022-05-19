//! wrong
// import CreditCard from "./wrong/CreditCard.js";
// import DebitCard from "./wrong/DebitCard.js";
// import NubankRewards from "./wrong/NubankRewards.js";

//* correct
import CreditCard from "./correct/CreditCard.js";
import DebitCard from "./correct/DebitCard.js";
import NubankRewards from "./correct/NubankRewards.js";

function main() {
  console.log("Liskov Substitution Principle");

  //! wrong
  // const cardC = new CreditCard();
  // const cardD = new DebitCard();
  // const cardR = new NubankRewards();

  // cardC.creditValidate();
  // cardC.collectPayment();

  // cardD.debitValidate();
  // cardD.collectPayment();

  // cardR.rewardsValidate();
  // cardR.collectPayment();

  //* correct
  const card = new CreditCard();
  //const card = new DebitCard();
  //const card = new NubankRewards();

  card.validate();
  card.collectPayment();
}

main();
