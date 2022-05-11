class Journal {
  constructor() {
    this.count = 0;
    this.entries = {};
  }

  addEntry(text) {
    let c = ++this.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }

  save(filename) {
    console.log("Saving...");
  }

  load(filename) {
    //
  }

  loadFromUrl(url) {
    //
  }
}

module.exports = Journal;
