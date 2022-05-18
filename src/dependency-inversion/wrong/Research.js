import Relationship from "./Relationship.js";

export default class Research {
  constructor(relationships) {
    // problem: direct dependence ↓↓↓↓ on storage mechanic
    let relations = relationships.data;
    for (let rel of relations.filter(
      (r) => r.from.name === "John" && r.type === Relationship.parent
    )) {
      console.log(`John has a child named ${rel.to.name}`);
    }
  }
}
