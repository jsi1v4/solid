//! Wrong
// import Person from "./wrong/Person.js";
// import Relationships from "./wrong/Relationships.js";
// import Research from "./wrong/Research.js";

//* Correct
import Person from "./correct/Person.js";
import Relationships from "./correct/Relationships.js";
import Research from "./correct/Research.js";

function main() {
  console.log("Dependency Inversion Principle");

  let parent = new Person("John");
  let child1 = new Person("Chris");
  let child2 = new Person("Matt");

  // low-level module
  let rels = new Relationships();
  rels.addParentAndChild(parent, child1);
  rels.addParentAndChild(parent, child2);

  // high-level module
  new Research(rels);
}

main();
