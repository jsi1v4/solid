export default class Printer {
  constructor() {
    if (this.constructor.name === "Printer")
      throw new Error("Printer is abstract!");
  }

  print(doc) {
    //
  }
}
