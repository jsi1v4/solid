// import Journal from "./wrong/Journal.js";
import Journal from "./correct/Journal.js";
import PersistenceManager from "./correct/PersistenceManager.js";

function main() {
  console.log("Single Responsibility Principle");

  // ! Wrong
  // let journal = new Journal();
  // let filename = "c:/temp/journal.txt";
  // journal.addEntry("I cried today.");
  // journal.addEntry("I ate a bug.");
  // journal.save(filename);

  // * Correct
  let journal = new Journal();
  let persistence = new PersistenceManager();
  let filename = "c:/temp/journal.txt";
  journal.addEntry("I cried today.");
  journal.addEntry("I ate a bug.");
  persistence.saveToFile(journal, filename);

  console.log(journal.toString());
}

main();
